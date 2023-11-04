import * as event from "./event";
import * as Basalt from "./types/basalt"


function GetReactor(): FissionReactorPeripheral {
    let [device] = peripheral.find("fissionReactorLogicAdapter");
    return <FissionReactorPeripheral>device;
}

const basalt = <Basalt.Basalt>require('basalt.lua');

const frame = basalt.createFrame();

/*frame.addText(1, 1,"Coolant:");
frame.addText(1, 2,"Status:");
frame.addText(1, 3, "Temperature:");
frame.addText(1, 4, "Waste:");
frame.addText(1, 5, "Damage:");
frame.addText(1, 6, "Heated Coolant:");

const coolText = frame.addText(2, 1,"0%");
const statusText = frame.addText(2, 2,"Unknow");
const tempText = frame.addText(2, 3, "0C");
const wasteText = frame.addText(2, 4, "0%");
const damageText = frame.addText(2, 5, "0%");
const heatcoolText = frame.addText(2, 6, "0%");*/

basalt.autoUpdate();


let reactor = GetReactor();
while (true) {
    try {
        let coolPercent = reactor.getCoolantFilledPercentage() * 100;
        let isRunning = reactor.getStatus();
        let tempc = reactor.getTemperature() - 273.15;
        let waste = reactor.getWasteFilledPercentage() * 100;
        let damage = reactor.getDamagePercent();
        let heatcoolPercent = reactor.getHeatedCoolantFilledPercentage() * 100;

        if (isRunning && (coolPercent < 50 || tempc >= 150 ||  waste > 80 || damage >= 5 || heatcoolPercent >= 50)) {
            reactor.scram();
            print("Stopped");
        }
        else if (!isRunning && (coolPercent == 100 && tempc <= 130 && waste == 0 && damage == 0 && heatcoolPercent < 50)) {
            reactor.activate();
            print("Started");
        }
    } catch (error) {
        let tried = 0;
        let success = false
        while (!success) {
            success = true;
            try {
                reactor = GetReactor();
                reactor.getTemperature();
            } catch (error) {
                success = false;
                print("error:" + error);
                print("Error Or No Reactor found...Keep looking...");
                print(tried);
                tried += 1;
            }
            os.sleep(1);
        }
    }
    os.sleep(1);
}