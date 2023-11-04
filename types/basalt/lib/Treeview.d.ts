import { ChangeableObject } from "./ChangeableObject";
import { EventCallbackReturnType } from "./types";

// TODO: all
// TODO: better generic type
export declare class Treeview extends ChangeableObject<unknown> {
    setOffset(x: number, y: number): this;
    getOffset(): LuaMultiReturn<[number, number]>;
    setScrollable(scrollable: boolean): this;
    setSelectionColor(
        backgroundColor: number,
        foregroundColor: number,
        active?: boolean
    ): this;
    getSelectionColor(): LuaMultiReturn<[number, number]>;
    isSelectionColorActive(): boolean;
    getRoot(): TreeviewNode;
    setRoot(node: TreeviewNode): this;

    onSelect(fn: (node: TreeviewNode) => EventCallbackReturnType): this;
}

export declare class TreeviewNode {
    getChildren(): TreeviewNode[];
    getParent(): TreeviewNode | null;
    addChild(text: string, expandable: boolean): this;
    setExpanded(expanded: boolean): this;
    isExpanded(): boolean;
    onSelect(fn: (node: TreeviewNode) => EventCallbackReturnType): this;
    setExpandable(expandable: boolean): this;
    isExpandable(): boolean;
    removeChild(index: number | TreeviewNode): this;
    findChildrenByText(searchText: string): TreeviewNode[];
    getText(): string;
    setText(text: string): this;
}
