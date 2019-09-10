/// <reference types="react" />
import { ListItem } from "../types/ListItem";
interface Props {
    listItem: ListItem;
    handleListItemClicked(listItem: ListItem): void;
}
export declare const ListItemRow: (props: Props) => JSX.Element;
export {};
