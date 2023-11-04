import * as event from "./event";
import * as Basalt from "./types/basalt";

function GetReactor(): FissionReactorPeripheral {
    let [device] = peripheral.find("fissionReactorLogicAdapter");
    return <FissionReactorPeripheral>device;
}

const basalt = <Basalt.Basalt>require('basalt.lua');

const frame = basalt.createFrame();

let stopProgram = false;

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
            statusLbl.setText("Exited");
            basalt.stopUpdate();
            break;
        }
        try {
            let coolPercent = reactor.getCoolantFilledPercentage() * 100;
            let isRunning = reactor.getStatus();
            let tempc = reactor.getTemperature() - 273.15;
            let waste = reactor.getWasteFilledPercentage() * 100;
            let damage = reactor.getDamagePercent();
            let heatcoolPercent = reactor.getHeatedCoolantFilledPercentage() * 100;
            coolantLbl.setText(coolPercent + "%");
            tempLbl.setText(Math.round(tempc) + "°C");
            wasteLbl.setText(waste + "%");
            damageLbl.setText(damage + "%");
            heatcoolLbl.setText(heatcoolPercent + "%");
            statusLbl.setText(isRunning ? "Running" : "Stopped");

            if (isRunning && (coolPercent < 50 || tempc >= 150 ||  waste > 80 || damage >= 5 || heatcoolPercent >= 50)) {
                reactor.scram();
            }
            else if (!isRunning && (coolPercent == 100 && tempc <= 130 && waste == 0 && damage == 0 && heatcoolPercent < 50)) {
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