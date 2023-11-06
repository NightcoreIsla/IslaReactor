export interface Config  {
    CoolantLowPercent: number;
    HeatedCoolantMaxPercent : number;
    WasteMaxPercent : number;
    DamageMaxPercent : number;
    TempertureLimit : number;
}
export class ReactorInfos {
    constructor(reactor : FissionReactorPeripheral) {
        this.CoolantFilledPercent = reactor.getCoolantFilledPercentage() * 100;
        this.IsRunning = reactor.getStatus();
        this.Temperture = reactor.getTemperature() - 273.15;
        this.WasteFilledPercent = reactor.getWasteFilledPercentage() * 100;
        this.DamagePercent = reactor.getDamagePercent();
        this.HeatedCoolantFilledPercent = reactor.getHeatedCoolantFilledPercentage() * 100;
    }
    /**
     * @Returns the reactor Coolant Filled Percentage *** Careful Boom ***
     */
    CoolantFilledPercent: number;
    /**
     * @Returns the reactor Heated Coolant Filled Percentage *** Careful Boom ***
     */
    HeatedCoolantFilledPercent: number;
    /**
     * @Returns the reactor Waste Tank Filled Percentage *** Careful Boom ***
     */
    WasteFilledPercent: number;
    /**
     * @Returns the reactor Fuel Tank Filled Percentage
     */
    FuelFilledPercent: number;
    /**
     * @Returns the reactor Damage *** Careful Boom ***
     */
    DamagePercent: number;
    /**
     * @Returns the current temperature should Celsius here. *** Careful Boom ***
     */
    Temperture: number;
    /**
     * @Returns the reactor burnrate mb/t.
     */
    BurnRate: number;
    /**
     * @returns is the reactor running or not.
     */
    IsRunning : boolean;
    
}