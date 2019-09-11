import React, { Component } from "react";
import { View, StyleSheet, Modal, Text, SafeAreaView, TouchableOpacity, FlatList, Alert } from "react-native";
import { Header } from "./Header";
import { NewItem } from "./NewItem";
import { database } from "../database/Database";
import { ListItemRow } from "./ListItemRow";
import { sharedStyle } from "../style/Shared";
export class ViewListModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItemText: ""
        };
        this.handleNewItemNameChange = this.handleNewItemNameChange.bind(this);
        this.handleAddNewItemToList = this.handleAddNewItemToList.bind(this);
        this.toggleListItemDoneness = this.toggleListItemDoneness.bind(this);
    }
    render() {
        const { visible, list, listItems } = this.props;
        if (list == null) {
            return null;
        }
        return (<Modal animationType="slide" transparent={false} visible={visible} onRequestClose={() => this.props.back()}>
        <SafeAreaView style={styles.container} testID="viewListModal">
          <View style={sharedStyle.headerWithButton}>
            <Header title={`List: ${list.title}`}/>

            <TouchableOpacity style={sharedStyle.headerButton} onPress={() => this.props.back()}>
              <Text>✖️</Text>
            </TouchableOpacity>
          </View>

          <NewItem newItemName={this.state.newItemText} handleNameChange={this.handleNewItemNameChange} handleCreateNewItem={this.handleAddNewItemToList} placeholderText="Enter a new list item" createButtonText="Add item"/>

          <FlatList data={listItems} renderItem={({ item }) => (<ListItemRow listItem={item} handleListItemClicked={this.toggleListItemDoneness}/>)} keyExtractor={(item, index) => `item-${index}`} ListFooterComponent={<TouchableOpacity style={styles.deleteList} onPress={() => this.deleteList()} testID="deleteListButton">
                <Text>Delete list</Text>
              </TouchableOpacity>}/>
        </SafeAreaView>
      </Modal>);
    }
    toggleListItemDoneness(listItem) {
        const newDoneState = !listItem.done;
        listItem.done = newDoneState;
        database.updateListItem(listItem).then(() => this.props.refreshListItems());
    }
    handleNewItemNameChange(newItemText) {
        this.setState({ newItemText });
    }
    handleAddNewItemToList() {
        const { newItemText } = this.state;
        if (newItemText === "") {
            return Promise.resolve();
        }
        if (this.props.list === undefined) {
            return Promise.reject(Error("Cannot add new item to undefined list"));
        }
        return database
            .addListItem(newItemText, this.props.list)
            .then(this.props.refreshListItems);
    }
    deleteList() {
        Alert.alert("Delete list?", "Are you sure you would like to delete this list?", [
            {
                text: "Yes, delete it",
                style: "destructive",
                onPress: () => {
                    this.props.deleteList().then(() => this.props.back());
                }
            },
            {
                text: "No",
                onPress: () => console.log("Cancel Pressed")
            }
        ]);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    deleteList: {
        alignItems: "center",
        marginTop: 10,
        padding: 10
    }
});
