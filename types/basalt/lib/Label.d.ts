import { TextAlign } from "./types";
import { VisualObject } from "./VisualObject";

export declare class Label extends VisualObject {
    setText(text: string): this;
    setFontSize(size: number): this;
    getFontSize(): number;
    setTextAlign(align: TextAlign): this;
}
