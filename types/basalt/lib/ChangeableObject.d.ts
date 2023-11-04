import { EventCallbackReturnType } from "./types";
import { VisualObject } from "./VisualObject";

export declare class ChangeableObject<T> extends VisualObject {
    setValue(value: T, valueChangedHandler?: boolean): this;
    getValue(): T;

    onChange(fn: (event: any, value: T) => EventCallbackReturnType): this;
}
