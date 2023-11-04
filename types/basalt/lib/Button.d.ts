import { HorizontalAlign, VerticalAlign } from "./types";
import { VisualObject } from "./VisualObject";

export declare class Button extends VisualObject {
    setText(text: string): this;
    setHorizontalAlign(pos: HorizontalAlign): this;
    setVerticalAlign(pos: VerticalAlign): this;
}
