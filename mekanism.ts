/** @noSelf Mekanism Fission Reactor adapter */
declare class FissionReactorPeripheral implements IPeripheral {
    /**
     * @Activate The Reactor, if status is not true / running, it will throw an error
     */
    activate(): void;
    /**
     * @Deactivate The Reactor, if status is not false / stopped, it will throw an error
     */
    scram(): void;
    /**
     * @Will return true when the reactor is online, and false when it isn't.
     */
    getStatus(): boolean;
    /**
     * @By default in Kelvin. (subtract 273.15 to convert to Celsius)
     */
    getTemperature(): number;
    /**
     * @Returns damage.
     */
    getDamagePercent(): number;
    /**
     * @Returns both the amount and type. For example, for coolant it can be {amount=7.29E7, name="minecraft:water"}
     */
    getCoolant(): Fluid;
    /**
     * @Returns how full the coolant tank is.
     */
    getCoolantFilledPercentage(): number;
    /**
     * @Returns both the amount and type.
     */
    getHeatedCoolant(): Fluid;
    /**
     * @Returns how full the heated coolant tank is.
     */
    getHeatedCoolantFilledPercentage(): number;
    /**
     * @Returns both the amount and type.
     */
    getFuel(): Fluid;
    /**
     * @Returns how full the fuel tank is.
     */
    getFuelFilledPercentage(): number;
    /**
     * @Returns the amount of fuel needed to completely fill the tank.
     */
    getFuelNeeded(): number;
    /**
     * @Returns the fuel capacity.
     */
    getFuelCapacity(): number;
    /**
     * @Returns both the amount and type.
     */
    getWaste(): Fluid;
    /**
     * @Returns how full the waste tank is.
     */
    getWasteFilledPercentage(): number;
    /**
     * @Returns the set reactor burn rate.
     */
    getBurnRate(): number;
    /**
     * @Returns the current burn rate.
     */
    getActualBurnRate(): number;
    /**
     * @Returns the maximum possible reactor burn rate.
     */
    getMaxBurnRate(): number;
    /**
     * @Returns the amount of coolant being heated (mB/t).
     */
    getHeatingRate(): number;
    /**
     * @Returns the environmental loss.
     */
    getEnvironmentalLoss(): number;
    /**
     * @Returns wether the reactor is force disabled.
     */
    isForceDisabled(): boolean;
    /**
     * @Set the desired reactor burn rate.
     */
    setBurnRate(rate:number): void;
}

declare class Fluid {
    /**
     * @Fluid Coolant Tank Fluid Amount Inside (mb)
     */
    amount: number;
    /**
     * @Fluid metadata example: "minecraft:water"
     */
    name: string;
}