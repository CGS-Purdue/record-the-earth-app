import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
export const ListRow = (props) => {
    const { list, handleListClicked } = props;
    return (<TouchableOpacity onPress={() => handleListClicked(list)} style={styles.row} testID={`listButton:${list.title}`}>
      <Text>{list.title}</Text>
    </TouchableOpacity>);
};
const styles = StyleSheet.create({
    row: {
        borderWidth: 1,
        padding: 15,
        marginTop: 10,
        backgroundColor: "#EEE",
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3
    }
});
