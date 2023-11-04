import { BaseFrame } from "./BaseFrame";

export declare class MonitorFrame extends BaseFrame {
    setMonitor(monitor: string | LuaTable): this;
    setMonitorGroup(monitorGroup: LuaTable): this;
}
