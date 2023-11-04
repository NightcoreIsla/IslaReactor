import { VisualObject } from "./VisualObject";
import { EventEntry, ProgramStatus } from "./types";

// TODO: all

export declare class Program extends VisualObject {
    getStatus(): ProgramStatus;
    // TODO: Better types
    execute(path: string | (() => void), ...args: any[]): this;
    stop(): this;
    pause(): this;
    isPaused(): boolean;
    injectEvent(event: string, ign: boolean, ...args: any[]): this;
    injectEvents(...events: EventEntry[]): this;
    getQueuedEvents(): EventEntry[];
    setEnviroment(env: LuaTable): this;
}
