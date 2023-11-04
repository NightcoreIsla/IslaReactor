import { VisualObject } from "./VisualObject";
import { ImageFormat } from "./types";

export declare class Image extends VisualObject {
    loadImage(path: string): this;
    setImage(table: LuaTable, format: ImageFormat): this;
    usePalette(use: boolean): this;
    play(infinitePlay: boolean): this;
    selectFrame(index: number): this;
    getMetadata(key: string): any;
    setImageSize(width: number, height: number): this;
    getImageSize(): LuaMultiReturn<[number, number]>;
    resizeImage(width: number, height: number): this;
    setOffset(offsetX: number, offsetY: number, rel?: boolean): this;
    getOffset(): LuaMultiReturn<[number, number]>;
    addFrame(index: number, frame: LuaTable): this;
    getFrame(index: number): LuaTable;
    getFrameObject(index: number): LuaTable;
    removeFrame(index: number): this;
    moveFrame(fromIndex: number, toIndex: number): this;
    getFrames(): LuaTable;
    getFrameCount(): number;
    getActiveFrame(): number;
    clear(): this;
    getImage(): LuaTable;
    setText(text: string, x: number, y: number);
    setBg(bg: string, x: number, y: number): this;
    setFg(fg: string, x: number, y: number): this;
    shrink(): this;
}
