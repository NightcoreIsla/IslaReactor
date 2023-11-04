import { ChangeableObject } from "./ChangeableObject";

// TODO: all

export declare class Textfield extends ChangeableObject<string> {
    // TODO: Better types
    getLines(): string[];

    getLine(index: number): string;
    editLine(index: number, text: string): this;
    addLine(text: string, index?: number): this;
    removeLine(index: number): this;
    getTextCursor(): LuaMultiReturn<[number, number]>;
    addKeywords(color: number, keywords: string[]): this;
    addRule(rule: string, textColor: number, backgroundColor: number): this;
    editRule(rule: string, textColor: number, backgroundColor: number): this;
    removeRule(rule: string): this;
    getOffset(): LuaMultiReturn<[number, number]>;
    setOffset(xOffset: number, yOffset: number): this;
    clear(): this;
    setSelection(fg: number, bg: number): this;
    getSelection(): LuaMultiReturn<[number, number]>;
}
