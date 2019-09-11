/// <reference types="react" />
interface Props {
    newItemName: string;
    placeholderText: string;
    createButtonText: string;
    buttonTestId?: string;
    textInputTestId?: string;
    handleNameChange(title: string): void;
    handleCreateNewItem(): Promise<void>;
}
export declare const NewItem: (props: Props) => JSX.Element;
export {};
