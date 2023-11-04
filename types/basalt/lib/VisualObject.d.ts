import { BasaltObject } from "./Object";
import { EventCallbackReturnType, Side, TextureMode } from "./types";

export declare class VisualObject extends BasaltObject {
    show(): this;
    hide(): this;
    setVisible(visible: boolean): boolean;
    isVisible(): boolean;
    setPosition(
        xPos: number | string,
        yPos: number | string,
        rel?: boolean
    ): this;
    getPosition(): LuaMultiReturn<[number, number]>;
    getX(): number;
    getY(): number;
    setSize(
        newWidth: number | string,
        newHeight: number | string,
        rel?: boolean
    ): this;
    getSize(): LuaMultiReturn<[number, number]>;
    getWidth(): number;
    getHeight(): number;
    setBackground(
        color: number | false,
        char?: string,
        backgroundSymbolColor?: number
    ): this;
    getBackground(): number | false;
    setForeground(color: number): this;
    getForeground(): number;
    setTransparency(transparency: boolean): this;
    setZIndex(index: number): this;
    getAbsolutePosition(
        x?: number,
        y?: number
    ): LuaMultiReturn<[number, number]>;
    ignoreOffset(ignore: boolean): this;
    isFocused(): boolean;
    setShadow(color: number): this;
    getShadow(): number | boolean;
    setBorder(color: number, ...sides: Side[]): this;
    animatePosition(
        x: number,
        y: number,
        duration: number,
        timeOffset?: number,
        mode?: string,
        f?: () => void
    ): this;
    animateSize(
        width: number,
        height: number,
        duration: number,
        timeOffset?: number,
        mode?: string,
        fn?: () => void
    ): this;
    animateSize(
        w: number,
        h: number,
        duration: number,
        timeOffset?: number,
        mode?: string,
        fn?: () => void
    ): this;
    animateOffset(
        x: number,
        y: number,
        duration: number,
        timeOffset?: number,
        mode?: string,
        fn?: () => void
    ): this;
    addTexture(path: string, animate?: boolean): this;
    setTextureMode(mode: TextureMode): this;
    setInfinitePlay(state: boolean): this;

    addDraw(
        name: string,
        f: () => void,
        pos?: number,
        typ?: number,
        active?: boolean
    ): this;
    addPreDraw(name: string, f: () => void, pos?: number, typ?: boolean): this;
    addPostDraw(name: string, f: () => void, pos?: number, typ?: boolean): this;
    setDrawState(name: string, state: boolean, typ?: number): this;
    getDrawID(name: string, typ?: number): number;
    addText(x: number, y: number, text: string): this;
    addBG(x: number, y: number, bg: string, noText?: boolean): this;
    addFG(x: number, y: number, bg: string): this;
    addBlit(x: number, y: number, text: string, fg: string, bg: string): this;
    addTextBox(
        x: number,
        y: number,
        width: number,
        height: number,
        text: string
    ): this;
    addBackgroundBox(
        x: number,
        y: number,
        width: number,
        height: number,
        color: number
    ): this;
    addForegroundBox(
        x: number,
        y: number,
        width: number,
        height: number,
        color: number
    ): this;

    onResize(fn: () => EventCallbackReturnType): this;
    onReposition(fn: () => EventCallbackReturnType): this;

    // TODO: Use mixins?

    getFlexGrow?(): number;
    setFlexGrow?(value: number): this;
    getFlexShrink?(): number;
    setFlexShrink?(value: number): this;
    getFlexBasis?(): number;
    setFlexBasis?(value: number): this;
}
