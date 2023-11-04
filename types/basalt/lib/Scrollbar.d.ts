import { VisualObject } from "./VisualObject";
import { ScrollbarBarType } from "./types";

// TODO: all

export declare class Scrollbar extends VisualObject {
    setSymbol(symbol: string, bg?: number, fg?: number): this;
    setBarType(barType: ScrollbarBarType): this;
    setScrollAmount(amount: number): this;
    setIndex(index: number): this;
    getIndex(): number;
}
