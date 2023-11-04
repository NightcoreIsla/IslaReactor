import { ScrollableFrame } from "./ScrollableFrame";
import { FlexDirection, FlexWrap, JustifyContent } from "./types";

export declare class Flexbox extends ScrollableFrame {
    setSpacing(value: number): this;
    getSpacing(): number;
    setDirection(value: FlexDirection): this;
    getDirection(): FlexDirection;
    setJustifyContent(value: JustifyContent): this;
    getJustifyContent(): JustifyContent;
    setWrap(value: FlexWrap): this;
    getWrap(): FlexWrap;
    updateLayout(): void;
    addBreak(): this;
}
