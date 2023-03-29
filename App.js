import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import { HomeScreen } from './Screens/HomeScreen';
import { SignUpScreen } from './Screens/SignUp';
import { SignInScreen } from './Screens/SignIn';

//Firebase
import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Stack = createNativeStackNavigator();

const FBapp = initializeApp( firebaseConfig );
const FBauth = getAuth(FBapp)

export default function App() {

const Signup = (email,password) => {
  createUserWithEmailAndPassword(FBauth, email, password)
  .then((userCredential) => console.log(userCredential))
  .catch(() => console.log(error)) 
}

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "SignUp">
            {(props) => <SignUpScreen {...props} handler={SignUp}/>}
          </Stack.Screen>
          <Stack.Screen name = "SignIn" component={SignInScreen}/>
          <Stack.Screen name = "Home" component={HomeScreen}/>
          
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
