import { List } from "./List";

// TODO: all

export declare class Radio extends List {
    addItem(
        text: string,
        x: number,
        y: number,
        bgCol?: number | undefined,
        fgCol?: number | undefined,
        ...args: any[]
    ): this;
    editItem(
        index: number,
        text: string,
        x: number,
        y: number,
        bgCol?: number | undefined,
        fgCol?: number | undefined,
        ...args: any[]
    ): this;
}
