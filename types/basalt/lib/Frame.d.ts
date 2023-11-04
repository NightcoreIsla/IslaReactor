import { Container } from "./Container";

export declare class Frame extends Container {
    getOffset(): LuaMultiReturn<[number, number]>;
    setOffset(xOffset: number, yOffset: number): this;
}
