import React from "react";
import { Text, StyleSheet } from "react-native";
export const Header = (props) => {
    const { title } = props;
    return <Text style={styles.header}>{title}</Text>;
};
const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        marginBottom: 20,
        marginTop: 20
    }
});
