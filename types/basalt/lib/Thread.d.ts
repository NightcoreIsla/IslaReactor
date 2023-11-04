import { BasaltObject } from "./Object";
import { ThreadStatus } from "./types";

export declare class Thread extends BasaltObject {
    start(fn: () => void): this;
    stop(): this;
    getStatus(): ThreadStatus | null;
}
