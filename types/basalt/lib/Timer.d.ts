import { BasaltObject } from "./Object";
import { EventCallbackReturnType } from "./types";

// TODO: all

export declare class Timer extends BasaltObject {
    setTime(timer: number, repeats: number): this;
    start(): this;
    cancel(): this;

    onCall(fn: () => EventCallbackReturnType): this;
}
