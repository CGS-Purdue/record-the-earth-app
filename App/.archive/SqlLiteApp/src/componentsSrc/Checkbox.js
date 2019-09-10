import React from "react";
import { StyleSheet, Text } from "react-native";
export const Checkbox = (props) => {
    const { checked } = props;
    return (<Text accessibilityLabel={`checkbox:${checked ? "checked" : "unchecked"}`} style={styles.check}>
      {checked ? "☑" : "⬜"}
    </Text>);
};
const styles = StyleSheet.create({
    check: {
        fontSize: 30
    }
});
