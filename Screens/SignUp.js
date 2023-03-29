import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {  useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function SignUpScreen (props){
    const [email, setEmail] = useState("")
    const [vaildEmail, setValidEmail] = useState(false)
    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState(false)
    const [validForm, setValidForm] = useState(false)
    
    const navigation = useNavigation()

    useEffect(() => {
        if(email.indexOf('@') > 0){
            setValidEmail(true)
        }
        else{
            setValidEmail(false)
        }
    }, [email])

    useEffect(() => {
        if(password.length >= 8){
            setValidPassword(true)
        }
        else{
            setValidPassword(false)
        }
    }, [password])

    useEffect(() => {
        if(vaildEmail && validPassword)(
            setValidForm(true)
        )
        else{
            setValidForm(false)
        }
    })
    

    return(
        <View style = {styles.page}>
            <Text style = {styles.title}>
                Sign Up for an account
            </Text>
            <View style = {styles.inputGroup}>
                <Text>Email Address</Text>
                <TextInput 
                    style = {(vaildEmail) ? styles.validInput : styles.input}
                    placeholder = "you@domain.com"
                    value={email}
                    onChangeText={ (emailText) => setEmail(emailText)}
                />
            </View>
            <View style = {styles.inputGroup}>
                <Text>Password</Text>
                <TextInput 
                    style = {(validPassword) ? styles.validInput : styles.input}
                    placeholder = "minimum of 8 characters"
                    value={password}
                    onChangeText={ (passwordText) => setPassword(passwordText)}
                    secureTextEntry = {true}
                /> 
            </View>
            <TouchableOpacity 
                style = { (validForm) ? styles.button: styles.buttonDisabled} 
                disabled = {(validForm) ? false : true}
                onPress={() => props.handler(email,password)}
            >                
                <Text style = {styles.buttonText}>
                    Sign Up 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style = {styles.signInLink}
                onPress = {() => navigation.navigate("SignIn")}
            >
                <Text style = {styles.singInLinkText}>Already have an Account? Sign in here.</Text>
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
    },
    signInLink: {
        marginVertical: 5,
    },
    singInLinkText:{
        textAlign: 'center',
    }



})