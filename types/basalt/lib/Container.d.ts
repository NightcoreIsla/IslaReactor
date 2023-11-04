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

    //add Elements
    addButton(id?: string): import("./Button").Button | null;
    addCheckbox(id?: string): import("./Checkbox").Checkbox | null;
    addDropdown(id?: string): import("./Dropdown").Dropdown | null;
    addFrame(id?: string): import("./Frame").Frame | null;
    addFlexbox(id?: string): import("./Flexbox").Flexbox | null;
    addImage(id?: string): import("./Image").Image | null;
    addInput<T>(id?: string): import("./Input").Input<T> | null;
    addLabel(id?: string): import("./Label").Label | null;
    addList(id?: string): import("./List").List | null;
    addMenubar(id?: string): import("./Menubar").Menubar | null;
    addPane(id?: string): import("./Pane").Pane | null;
    addProgram(id?: string): import("./Program").Program | null;
    addProgressbar(id?: string): import("./Progressbar").Progressbar | null;
    addRadio(id?: string): import("./Radio").Radio | null;
    addScrollbar(id?: string): import("./Scrollbar").Scrollbar | null;
    addSlider(id?: string): import("./Slider").Slider | null;
    addTextfield(id?: string): import("./Textfield").Textfield | null;
    addThread(id?: string): import("./Thread").Thread | null;
    addTimer(id?: string): import("./Timer").Timer | null;
    addTreeview(id?: string): import("./Treeview").Treeview | null;
}
