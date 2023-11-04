export type EventCallbackReturnType = boolean | void;
export type Side = "left" | "top" | "right" | "bottom";
export type TextureMode = "default" | "center" | "right";
export type DraggingMap = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};
export type ScrollDirection = "vertical" | "horizontal";
export type FlexDirection = "row" | "column";
export type JustifyContent =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
export type FlexWrap = "wrap" | "nowrap";

export type HorizontalAlign = "left" | "center" | "right";
export type VerticalAlign = "top" | "center" | "bottom";
export type TextAlign = "left" | "center" | "right";

export type ThreadStatus = "running" | "normal" | "suspended" | "dead";
export type ProgramStatus = ThreadStatus;

export type GraphType = "scatter" | "line" | "bar";
export type ImageFormat = "nfp" | "bimg";
export type InputType = "text" | "password" | "number";

export type EventEntry = {
    event: string;
    args: any[];
};

export type ProgressBarDirection = 0 | 1 | 2 | 3;
export type ScrollbarBarType = "vertical" | "horizontal";
export type SliderBarType = "vertical" | "horizontal";
