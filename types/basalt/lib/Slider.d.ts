import { ChangeableObject } from "./ChangeableObject";
import { SliderBarType } from "./types";

// TODO: all

export declare class Slider extends ChangeableObject<number> {
    setSymbol(symbol: string): this;
    setBarType(type: SliderBarType): this;
    setMaxValue(val: number): this;
    setIndex(index: number): this;
    getIndex(): number;
}
