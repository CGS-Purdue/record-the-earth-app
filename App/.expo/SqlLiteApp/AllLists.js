import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import { NewItem } from "./NewItem";
import { Header } from "./Header";
import { ListRow } from "./ListRow";
import { database } from "../database/Database";
import { ViewListModal } from "./ViewListModal";
import { SettingsModal } from "./SettingsModal";
export class AllLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newListTitle: "",
            lists: [],
            listModalVisible: false,
            settingsModalVisible: false,
            selectedListsItems: []
        };
        this.handleNewListTitleChange = this.handleNewListTitleChange.bind(this);
        this.handleCreateList = this.handleCreateList.bind(this);
        this.handleListClicked = this.handleListClicked.bind(this);
        this.refreshListsItems = this.refreshListsItems.bind(this);
        this.deleteList = this.deleteList.bind(this);
    }
    componentDidMount() {
        this.refreshListOfLists();
    }
    render() {
        return (<View style={styles.container} testID="allListsView">
        <View style={styles.headerWithSettings}>
          <TouchableOpacity style={styles.settingsButton} onPress={() => this.setState({ settingsModalVisible: true })}>
            <Text style={styles.settingsButtonText}>⚙️</Text>
          </TouchableOpacity>
          <Header title="SQLite List App"/>
        </View>

        <NewItem newItemName={this.state.newListTitle} handleNameChange={this.handleNewListTitleChange} handleCreateNewItem={this.handleCreateList} placeholderText="Enter a name for your new list" createButtonText="Add list" buttonTestId="addListButton" textInputTestId="newListTextInput"/>

        <FlatList data={this.state.lists} renderItem={({ item }) => (<ListRow list={item} handleListClicked={this.handleListClicked}/>)} keyExtractor={(item, index) => `${index}`}/>

        <ViewListModal visible={this.state.listModalVisible} list={this.state.selectedList} back={() => this.setState({ listModalVisible: false })} listItems={this.state.selectedListsItems} refreshListItems={this.refreshListsItems} deleteList={this.deleteList}/>

        <SettingsModal visible={this.state.settingsModalVisible} back={() => this.setState({ settingsModalVisible: false })}/>
      </View>);
    }
    handleNewListTitleChange(title) {
        this.setState({
            newListTitle: title
        });
    }
    handleCreateList() {
        const { newListTitle } = this.state;
        return database.createList(newListTitle).then(() => {
            this.refreshListOfLists();
        });
    }
    handleListClicked(list) {
        console.log(`List clicked! Title: ${list.title}`);
        this.refreshListsItems(list).then(() => this.setState({
            selectedList: list,
            listModalVisible: true
        }));
    }
    refreshListOfLists() {
        return database.getAllLists().then(lists => this.setState({ lists }));
    }
    refreshListsItems(listToRefresh = this.state.selectedList, doneItemsLast = false) {
        console.log(`Refreshing list items for list: ${listToRefresh && listToRefresh.title}`);
        if (listToRefresh !== undefined) {
            return database
                .getListItems(listToRefresh, doneItemsLast)
                .then(selectedListsItems => this.setState({ selectedListsItems }));
        }
        return Promise.reject(Error("Could not refresh an undefined list's items"));
    }
    deleteList(listToDelete = this.state.selectedList) {
        if (listToDelete !== undefined) {
            return database
                .deleteList(listToDelete)
                .then(() => this.refreshListOfLists());
        }
        return Promise.reject(Error("Could not delete an undefined list"));
    }
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1
    },
    headerWithSettings: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    settingsButton: {
        marginTop: 10,
        paddingRight: 5,
        paddingBottom: 10,
        paddingTop: 10
    },
    settingsButtonText: {
        fontSize: 20
    }
});
