import { Frame } from "./Frame";
import { FlexDirection, ScrollDirection } from "./types";

export declare class ScrollableFrame extends Frame {
    setDirection(direction: ScrollDirection | FlexDirection): this;
}
