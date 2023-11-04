import { ChangeableObject } from "./ChangeableObject";

// TODO: all

export declare class List extends ChangeableObject<Array<string>> {
    addItem(text: string, bgCol?: number, fgCol?: number, ...args: any[]): this;
    removeItem(index: number): this;
    editItem(
        index: number,
        text: string,
        bgCol?: number,
        fgCol?: number,
        ...args: any[]
    ): this;
    // TODO: Better types
    getItem(index: number): any;
    getItemCount(): number;
    // TODO: Better types
    setOptions(options: LuaTable): this;
    // TODO: Better types
    getOptions(): LuaTable;
    selectItem(index: number): this;
    clear(): this;
    getItemIndex(): number;
    setOffset(yOff: number): this;
    getOffset(): number;
    setScrollable(scroll: boolean): this;
    setSelectionColor(bgCol: number, fgCol: number, active?: boolean): this;
    getSelectionColor(): LuaMultiReturn<[number, number]>;
    isSelectionColorActive(): boolean;
}
