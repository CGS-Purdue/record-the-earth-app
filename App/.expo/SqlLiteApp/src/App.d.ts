import { Component } from "react";
interface State {
    appState: string;
    databaseIsReady: boolean;
    loading: boolean;
    loadingText: string;
}
export default class App extends Component<object, State> {
    private databaseSynchronizer;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private handleAppStateChange;
    private appIsNowRunningInForeground;
    private appHasGoneToTheBackground;
    private prepareForDatabaseUpdate;
}
export {};
