import { Frame } from "./Frame";
import { DraggingMap } from "./types";

export declare class MovableFrame extends Frame {
    setDraggingMap(draggingMap: DraggingMap): this;
    getDraggingMap(): DraggingMap;
}
