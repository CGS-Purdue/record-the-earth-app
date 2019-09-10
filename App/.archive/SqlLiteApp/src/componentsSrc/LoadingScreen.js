import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
export const LoadingScreen = (props) => {
    return (<View style={styles.container}>
      <ActivityIndicator size="large" color="#00FF00"/>
      <Text style={styles.text}>{props.text || "Loading..."}</Text>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        textAlign: "center",
        paddingTop: 10
    }
});
