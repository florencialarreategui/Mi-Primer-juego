import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const style = StyleSheet.create({
    container:{
        flex:1,
        aligmItems: "center",
        marginVertical: 10,

    }
})

const StartGameScreen = () =>{
    return(
        <View style={StyleSheet.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Elija un número</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button
                    title="Confirmar"
                    onPress={( () => null)}
                    color= "#392F5A"
                    />
                     <Button
                    title="Confirmar"
                    onPress={( () => null)}
                    color= "#392F5A"
                    />
                </View>
            </View>
        </View>
    )
}
export default StartGameScreen;