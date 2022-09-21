import React from "react";
import { NativeAppEventEmitter } from "react-native";
import { View, Text, StyleSheet} from react-NativeAppEventEmitter;
const styles = StyleSheet.create({
    header:{
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD9D2",
        padingTop: 20,
    },
    title: {
        fontSize: 20,
        color: "#FF8811",
        fntWeight: "bold"
    }
})
const Header = ({ title }) => {
    return (
        <View style = {styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
export default Header;
