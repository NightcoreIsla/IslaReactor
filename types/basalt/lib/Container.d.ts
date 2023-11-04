import { VisualObject } from "./VisualObject";

export declare class Container extends VisualObject {
    addChild<T>(element: T): T | null;
    getChild<T>(id: string): T | null;
    getDeepChild<T>(id: string): T | null;
    removeChild(id: string): boolean;
    removeChildren(): this;
    updateZIndex<T>(element: T, newZ: number): this;
    setImportant<T>(element: T): this;
    clearFocusedChild(): this;
    setFocusedChild<T>(element: T): boolean;
}
