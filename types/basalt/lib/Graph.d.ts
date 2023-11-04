import { VisualObject } from "./VisualObject";
import { GraphType } from "./types";

export declare class Graph extends VisualObject {
    setGraphColor(color: number): this;
    setGraphSymbol(symbol: string, symbolColor?: number): this;
    getGraphSymbol(): LuaMultiReturn<[string, number]>;
    addDataPoint(value: number): this;
    setMaxValue(value: number): this;
    getMaxValue(): number;
    setMinValue(value: number): this;
    getMinValue(): number;
    setGraphType(graphType: GraphType): this;
    setMaxEntries(value: number): this;
    getMaxEntries(): number;
    clear(): this;
    draw(): void;
}
