import * as event from "./event";

function GetReactor(): FissionReactorPeripheral {
    let [device] = peripheral.find("fissionReactorLogicAdapter");
    return <FissionReactorPeripheral>device;
}
let reactor = GetReactor();
while (true) {
    if (reactor == null) {
        print("No Reactor found...Keep looking...");
        while (reactor != null) {
            reactor = GetReactor();
        }
    }
    let coolPercent = reactor.getCoolantFilledPercentage() * 100;
    let isRunning = reactor.getStatus();
    let tempc = reactor.getTemperature() - 273.15;
    let waste = reactor.getWasteFilledPercentage() * 100;
    let damage = reactor.getDamagePercent();
    let heatcoolPercent = reactor.getHeatedCoolantFilledPercentage() * 100;


    print("cool:" + coolPercent);
    print("Running:" + isRunning);
    print("tempc:" + tempc);
    print("waste:" + waste);
    print("damage:" + damage);
    print("heatcool:" + heatcoolPercent);
    if (isRunning && (coolPercent < 50 || tempc >= 150 ||  waste > 80 || damage >= 5 || heatcoolPercent >= 50)) {
        reactor.scram();
        print("Stopped");
    }
    else if (!isRunning && (coolPercent == 100 && tempc <= 130 && waste == 0 && damage == 0 && heatcoolPercent < 50)) {
        reactor.activate();
        print("Started");
    }
    os.sleep(1);
}