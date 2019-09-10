/// <reference types="react" />
import { List } from "../types/List";
interface Props {
    list: List;
    handleListClicked(list: List): void;
}
export declare const ListRow: (props: Props) => JSX.Element;
export {};
