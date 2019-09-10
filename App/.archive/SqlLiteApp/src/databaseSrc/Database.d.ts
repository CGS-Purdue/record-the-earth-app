import SQLite from "react-native-sqlite-storage";
import { List } from "../types/List";
import { ListItem } from "../types/ListItem";
export interface Database {
    open(): Promise<SQLite.SQLiteDatabase>;
    close(): Promise<void>;
    createList(newListTitle: string): Promise<void>;
    addListItem(text: string, list: List): Promise<void>;
    getAllLists(): Promise<List[]>;
    getListItems(list: List, doneItemsLast: boolean): Promise<ListItem[]>;
    updateListItem(listItem: ListItem): Promise<void>;
    deleteList(list: List): Promise<void>;
}
export declare const database: Database;
