import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "./Checkbox";
export const ListItemRow = (props) => {
    const { listItem, handleListItemClicked } = props;
    return (<TouchableOpacity onPress={() => handleListItemClicked(listItem)} style={styles.row} testID={`listItem:${listItem.text}`}>
      <Checkbox checked={listItem.done}/>
      <Text style={[styles.itemText, listItem.done && styles.done]}>
        {listItem.text}
      </Text>
    </TouchableOpacity>);
};
const styles = StyleSheet.create({
    row: {
        borderWidth: 1,
        paddingLeft: 15,
        marginTop: 10,
        borderRadius: 3,
        flexDirection: "row",
        alignItems: "center"
    },
    itemText: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 11
    },
    done: {
        textDecorationLine: "line-through",
        color: "gray"
    }
});
