import { Component } from "react";
interface Props {
    visible: boolean;
    back(): void;
}
interface State {
    isDropboxStatusKnown: boolean;
    hasAuthorizedWithDropbox: boolean;
    downloading: boolean;
}
export declare class SettingsModal extends Component<Props, State> {
    private dropboxAuth;
    private dropboxSync;
    constructor(props: Props);
    render(): JSX.Element;
    private renderDropboxComponents;
    private authorizeWithDropbox;
    private promptToUnlinkFromDropbox;
    private unlinkFromDropbox;
    private modalOnShow;
}
export {};
