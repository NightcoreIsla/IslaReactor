import { ChangeableObject } from "./ChangeableObject";
import { InputType } from "./types";

// TODO: all

export declare class Input<T> extends ChangeableObject<T> {
    setInputType(type: InputType): this;
    getInputType(): InputType;
    setDefaultText(text: string, fCol?: number, bCol?: number): this;
    setInputLimit(characterLimit: number): this;
    getInputLimit(): number;
    setOffset(x: number): this;
    getOffset(): number;
    setTextOffset(x: number): this;
    getTextOffset(): number;
}
