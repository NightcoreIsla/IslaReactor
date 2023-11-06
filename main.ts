import * as event from "./event";
import * as Basalt from "./types/basalt";
import * as json from "json";
import { Config, ReactorInfos } from "./Model";



//#region json config reading
const [file] = io.open("config.json", 'r');
if (file == null) {
    error("Config file not found,please download config.json to same folder with main.lua");
}
const fileContent = file.read("*a");
const config = json.decode<Config>(fileContent);
file.close();
//#endregion

//#region base function for mekanism reactor
function GetReactor(): FissionReactorPeripheral {
    let [device] = peripheral.find("fissionReactorLogicAdapter");
    return <FissionReactorPeripheral>device;
}
//#endregion


const basalt = <Basalt.Basalt>require('basalt.lua');
const frame = basalt.createFrame();


//init status infos prefix
frame.addLabel().setText("Coolant:").setPosition(1,1);
frame.addLabel().setText("Temperature:").setPosition(1,2);
frame.addLabel().setText("Waste:").setPosition(1,3);
frame.addLabel().setText("Damage:").setPosition(1,4);
frame.addLabel().setText("Heated Coolant:").setPosition(1,5);
frame.addLabel().setText("Status:").setPosition(1,6);

//init status info values
const coolantLbl = frame.addLabel().setText("0%").setPosition(16,1);
const tempLbl = frame.addLabel().setText("0%").setPosition(16,2);
const wasteLbl = frame.addLabel().setText("0%").setPosition(16,3);
const damageLbl = frame.addLabel().setText("0%").setPosition(16,4);
const heatcoolLbl = frame.addLabel().setText("0%").setPosition(16,5);
const statusLbl = frame.addLabel().setText("UnKnow").setPosition(16,6);


//exit button
let stopProgram = false;
const exitBtn = frame.addButton();
exitBtn.setBackground(colors.red);
exitBtn.setPosition(10, 10);
exitBtn.setText("Exit");
exitBtn.onClick(() => {
    statusLbl.setText("Exiting...");
    stopProgram = true;
});

//main loop for keep reactor health and update info
function MainLoop() {
    let reactor = GetReactor();
    while (true) {
        if (stopProgram) {
            try {
                reactor.scram();
            } catch (error) {}         
            statusLbl.setText("Exited");
            basalt.stopUpdate();
            break;
        }
        try {
            let reactorInfos = new ReactorInfos(reactor);
            coolantLbl.setText(reactorInfos.CoolantFilledPercent + "%")
                .setForeground(reactorInfos.CoolantFilledPercent > config.CoolantLowPercent ? colors.white : colors.red);
            tempLbl.setText(reactorInfos.Temperture + "°C")
                .setForeground(reactorInfos.Temperture < config.TempertureLimit ? colors.white : colors.red);
            wasteLbl.setText(reactorInfos.WasteFilledPercent + "%")
                .setForeground(reactorInfos.WasteFilledPercent < config.WasteMaxPercent ? colors.white : colors.red);
            damageLbl.setText(reactorInfos.DamagePercent + "%")
                .setForeground(reactorInfos.DamagePercent < config.DamageMaxPercent ? colors.white : colors.red);
            heatcoolLbl.setText(reactorInfos.HeatedCoolantFilledPercent + "%")
                .setForeground(reactorInfos.HeatedCoolantFilledPercent < config.HeatedCoolantMaxPercent ? colors.white : colors.red);
            
            statusLbl.setText(reactorInfos.IsRunning ? "Running" : "Stopped");
            


            if (reactorInfos.IsRunning && (
                reactorInfos.CoolantFilledPercent < config.CoolantLowPercent ||
                 reactorInfos.Temperture > config.TempertureLimit ||
                  reactorInfos.WasteFilledPercent > config.WasteMaxPercent ||
                   reactorInfos.DamagePercent > config.DamageMaxPercent ||
                    reactorInfos.HeatedCoolantFilledPercent > config.HeatedCoolantMaxPercent)
                )
                {
                reactor.scram();
            }
            else if (!reactorInfos.IsRunning && (
                reactorInfos.CoolantFilledPercent == 100 &&
                reactorInfos.Temperture <= 130 &&
                reactorInfos.WasteFilledPercent == 0 &&
                reactorInfos.DamagePercent == 0 &&
                reactorInfos.HeatedCoolantFilledPercent < 30)
                ) {
                reactor.activate();
                
            }
        } catch (error) {
            statusLbl.setText("Error Or No Reactor found...Keep looking..." + math.random(1,9));
            reactor = GetReactor();
        }
        os.sleep(1);
    }
}
frame.addThread().start(MainLoop);
basalt.autoUpdate();