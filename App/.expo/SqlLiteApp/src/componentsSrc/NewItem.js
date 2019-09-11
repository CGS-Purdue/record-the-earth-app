import React from "react";
import { Keyboard, View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
export const NewItem = (props) => {
    const { newItemName, placeholderText, createButtonText, handleNameChange, handleCreateNewItem } = props;
    const createNewItem = () => {
        if (newItemName !== "") {
            handleCreateNewItem().then(() => {
                handleNameChange("");
                Keyboard.dismiss();
            });
        }
    };
    return (<View style={styles.wrapper}>
      <TextInput placeholder={placeholderText} onChangeText={handleNameChange} value={newItemName} style={styles.textInput} testID={props.textInputTestId || "newItemTextInput"} onSubmitEditing={createNewItem}/>
      <TouchableOpacity style={styles.button} onPress={createNewItem} testID={props.buttonTestId || "newItemButton"}>
        <Text>{createButtonText}</Text>
      </TouchableOpacity>
    </View>);
};
const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        padding: 5,
        flex: 4
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5
    }
});
