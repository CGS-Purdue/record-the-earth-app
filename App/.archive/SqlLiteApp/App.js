import React, { Component } from "react";
import { AllLists } from "./components/AllLists";
import { AppState, StyleSheet, SafeAreaView} from "react-native";
import { LoadingScreen } from "./components/LoadingScreen";
import { database } from "./database/Database";
import { DatabaseSynchronizer } from "./database/DatabaseSynchronizer";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: AppState.currentState,
            databaseIsReady: false,
            loading: false,
            loadingText: "Loading..."
        };
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.prepareForDatabaseUpdate = this.prepareForDatabaseUpdate.bind(this);
        this.databaseSynchronizer = new DatabaseSynchronizer(this.prepareForDatabaseUpdate);
    }

    componentDidMount() {
        this.appIsNowRunningInForeground();
        this.setState({
            appState: "active"
        });
        AppState.addEventListener("change", this.handleAppStateChange);
    }


    componentWillUnmount() {
        AppState.removeEventListener("change", this.handleAppStateChange);
    }



    render() {
        if (this.state.databaseIsReady && this.state.loading === false) {
            return (<SafeAreaView style={styles.container}>
          <AllLists />
        </SafeAreaView>);
        }
        else {
            return <LoadingScreen text={this.state.loadingText}/>;
        }
    }


    handleAppStateChange(nextAppState) {
        if (this.state.appState.match(/inactive|background/) &&
            nextAppState === "active") {
            this.appIsNowRunningInForeground();
        }
        else if (this.state.appState === "active" &&
            nextAppState.match(/inactive|background/)) {
            this.appHasGoneToTheBackground();
        }
        this.setState({ appState: nextAppState });
    }


    appIsNowRunningInForeground() {
        console.log("App is now running in the foreground!");
        this.databaseSynchronizer.syncDatabase();
        return database.open().then(() => this.setState({
            databaseIsReady: true
        }));
    }

    appHasGoneToTheBackground() {
        console.log("App has gone to the background.");
        database.close();
    }

    prepareForDatabaseUpdate() {
        this.setState({
            loading: true,
            loadingText: "Downloading database..."
        });
        return database.close();
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
