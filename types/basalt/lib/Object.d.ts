import { EventCallbackReturnType } from "./types";

export declare class BasaltObject {
    disable(): this;
    enable(): this;
    getAbsolutePosition(
        x?: number,
        y?: number
    ): LuaMultiReturn<[number, number]>;
    getType(): string;
    isType(t: string): boolean;
    getName(): string;

    // TODO better types
    getParent(): any;

    setParent(newParent: any, noRemove: boolean): this;
    getZIndex(): number;

    remove(): this;

    onClick(
        fn: (
            event: any,
            button: string,
            x: number,
            y: number
        ) => EventCallbackReturnType
    ): this;
    onClickup(
        fn: (
            event: any,
            button: string,
            x: number,
            y: number
        ) => EventCallbackReturnType
    ): this;
    onRelease(
        fn: (
            event: any,
            button: string,
            x: number,
            y: number
        ) => EventCallbackReturnType
    ): this;
    onScroll(
        fn: (
            event: any,
            direction: any,
            x: number,
            y: number
        ) => EventCallbackReturnType
    ): this;
    onDrag(
        fn: (
            event: any,
            button: string,
            x: number,
            y: number,
            xOffset: number,
            yOffset: number
        ) => EventCallbackReturnType
    ): this;
    onHover(
        fn: (
            event: any,
            button: string,
            x: number,
            y: number
        ) => EventCallbackReturnType
    ): this;
    onLeave(
        fn: (
            event: any,
            button: string,
            x: number,
            y: number
        ) => EventCallbackReturnType
    ): this;
    onKey(fn: (event: any, key: any) => EventCallbackReturnType): this;
    onChar(fn: (event: any, char: any) => EventCallbackReturnType): this;
    onKeyUp(fn: (event: any, key: any) => EventCallbackReturnType): this;
    onGetFocus(fn: () => EventCallbackReturnType): this;
    onLoseFocus(fn: () => EventCallbackReturnType): this;
    onEvent(fn: (event: any, ...args: any) => EventCallbackReturnType): this;
}
