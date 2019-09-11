import { Component } from "react";
import { List } from "../types/List";
import { ListItem } from "../types/ListItem";
interface Props {
    visible: boolean;
    list?: List;
    listItems: ListItem[];
    back(): void;
    refreshListItems(): Promise<void>;
    deleteList(): Promise<void>;
}
interface State {
    newItemText: string;
}
export declare class ViewListModal extends Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
    private toggleListItemDoneness;
    private handleNewItemNameChange;
    private handleAddNewItemToList;
    private deleteList;
}
export {};
