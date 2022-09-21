import React, { useState} from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import Input from "../components/input";
import  Card  from "../components/card"
import { colors } from "../constants/colors";
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
        textAlign: "center",
        
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
    const [number, setNumber] = useState("");
    const onHandleChange = (text) => {
        setNumber(text.replace(/[0-9]/g,""));
    }
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={StyleSheet.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <View style={styles.inputContainer}>
               <Card style={styles.inputContainer}>
                <Text style={styles.label}>Elija un número</Text>
                <Input style={styles.input}
                 keyboardType="numeric" 
                 maxLength={2}
                 blurOnSubmit
                 autoCapitalize="none"
                 autoCorrect={false}
                 onChangeText={(text) => onHandleChange(text)}
                 value={number}
                 />
                <View style={styles.buttonContainer}>
                    <Button
                    title="Limpiar"
                    onPress={( () => null)}
                    color= {colors.amarillo}
                    />
                     <Button
                    title="Confirmar"
                    onPress={( () => null)}
                    color= {colors.amarillo}
                    />
                </View>
                </Card>
            </View>
        </View>
       </TouchableWithoutFeedback>
    )
}
export default StartGameScreen;