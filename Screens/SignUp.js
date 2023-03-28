import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export function SignUpScreen (props){
    return(
        <View style = {styles.page}>
            <Text style = {styles.title}>
                Sign Up for an account
            </Text>
            <View style = {styles.inputGroup}>
                <Text>Email Address</Text>
                <TextInput style = {styles.input}/>
            </View>
            <View style = {styles.inputGroup}>
                <Text>Password</Text>
                <TextInput style = {styles.input}/>
            </View>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Sign Up 
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
        backgroundColor: '#a45167',
        padding: 10,
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
    }
})