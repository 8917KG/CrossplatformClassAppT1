import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {  useEffect, useState } from "react";

export function SignInScreen (props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <View style = {styles.page}>
            <Text style = {styles.title}>
                Sign Up for an account
            </Text>
            <View style = {styles.inputGroup}>
                <Text>Email Address</Text>
                <TextInput 
                    style = {styles.input}
                    placeholder = "you@domain.com"
                    value={email}
                    onChangeText={ (emailText) => setEmail(emailText)}
                />
            </View>
            <View style = {styles.inputGroup}>
                <Text>Password</Text>
                <TextInput 
                    style = {styles.input}
                    placeholder = "minimum of 8 characters"
                    value={password}
                    onChangeText={ (passwordText) => setPassword(passwordText)}
                    secureTextEntry = {true}
                /> 
            </View>
            <TouchableOpacity 
                style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Sign In
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        marginHorizontal: 80,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop:20,
    },
    input: {
        backgroundColor: '#9a8c98',
        padding: 10,
        borderColor: 'black',
        borderWidth: 3,
    },
    validInput:{
        borderColor: '#9dcec7',
        backgroundColor: '#9a8c98',
        padding: 10,
        borderWidth:5,
    },
    inputGroup: {
        marginVertical: 5,
    },
    button:{
        backgroundColor: '#c9e9e4',
        padding: 10,
        marginVertical: 5,
    },
    buttonText: {
        textAlign: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#d4ddff',
        padding: 10,
        marginVertical: 5,
    }
}) 