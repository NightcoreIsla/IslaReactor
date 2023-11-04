import { Frame } from "./lib/Frame";
import { EventCallbackReturnType } from "./lib/types";

export declare interface Basalt {
    debug: (...args: any[]) => void;

    // TODO
    basaltError;
    logging: boolean;
    dynamicValueEvents: boolean;
    drawFrames: () => void;
    // TODO
    log: (text: string, type: string) => void;
    getVersion: () => string;
    memory: () => string;
    addObject: (path: string) => void;
    addPlugin: (path: string) => void;
    getAvailablePlugins: () => string[];
    getAvailableObjects: () => string[];

    // TODO
    setVariable;
    getVariable;
    getObjects;
    getObject;
    createObject;
    setBaseTerm;

    resetPalette: () => void;
    setMouseMoveThrottle: (amount: number) => boolean;
    setRenderingThrottle: (amount: number) => void;
    setMouseDragThrottle: (amount: number) => void;

    autoUpdate: (isActive?: boolean) => void;
    // TODO better types
    update: (event: string, ...args: any) => void;

    // TODO
    stop;
    stopUpdate;

    isKeyDown: (key: number) => boolean;

    getFrame: (id: string) => Frame | null;
    getActiveFrame: () => Frame | null;
    setActiveFrame: (frame: Frame) => boolean;
    getMainFrame: () => Frame | null;

    onEvent: (fn: (event: string) => EventCallbackReturnType) => void;

    schedule: (fn: () => void) => () => void;

    addFrame: (id?: string) => Frame | null;
    createFrame: (id?: string) => Frame | null;
    addMonitor: (id?: string) => Frame | null;

    removeFrame: (id: string) => void;
    setProjectDir: (dir: string) => void;
}

export declare const basalt: Basalt;
