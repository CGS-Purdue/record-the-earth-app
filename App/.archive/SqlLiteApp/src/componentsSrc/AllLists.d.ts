import { Component } from "react";
import { List } from "../types/List";
import { ListItem } from "../types/ListItem";
interface State {
    newListTitle: string;
    lists: List[];
    listModalVisible: boolean;
    settingsModalVisible: boolean;
    selectedList?: List;
    selectedListsItems: ListItem[];
}
export declare class AllLists extends Component<any, State> {
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
    private handleNewListTitleChange;
    private handleCreateList;
    private handleListClicked;
    private refreshListOfLists;
    private refreshListsItems;
    private deleteList;
}
export {};
