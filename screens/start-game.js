import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        aligmItems: "center",
        marginVertical: 10,

    },
    title:{
       fontSize:20,
        color: "#FFF8F0",
        textAling:"center ",
        paddingVertical: 20,
    },
    label: {
        fontSize:14,
        color: "#392F5A",
        textAling:"center ",
        paddingVertical: 5,
    },
    inputContainer: {
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal: 20,
    },
    input:{
        width:"100%",
        borderBottomColor: "#392F5A",
        borderBottomWidth:1,
        minWidth: 90,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: "center"
    },
    buttonContainer:{
        with:"75%",
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent:" space-around",
        marginTop: 20,
    }


})

const StartGameScreen = () =>{
    return(
        <View style={StyleSheet.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Elija un número</Text>
                <TextInput style={styles.input}/>
                <View style={styles.buttonContainer}>
                    <Button
                    title="Limpiar"
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