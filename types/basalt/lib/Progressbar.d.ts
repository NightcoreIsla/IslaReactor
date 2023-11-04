import { ChangeableObject } from "./ChangeableObject";
import { ProgressBarDirection } from "./types";

// TODO: all

export declare class Progressbar extends ChangeableObject<number> {
    setDirection(direction: ProgressBarDirection): this;
    setProgress(value: number): this;
    getProgress(): number;
    setProgressBar(color: number, symbol?: string, symbolcolor?: number): this;
    setBackgroundSymbol(symbol: string): this;
}
