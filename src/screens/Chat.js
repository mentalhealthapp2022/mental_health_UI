// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity, Image} from "react-native";
import { GiftedChat} from 'react-native-gifted-chat';
import React, { useEffect, useState } from "react";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = { 
//   apiKey: "AIzaSyCla0O9q3tiYeIrnY9xJimi4HaFs5k7AuA",
//   authDomain: "chatapp-3e90b.firebaseapp.com",
//   databaseURL: "https://chatapp-3e90b-default-rtdb.firebaseio.com",
//   projectId: "chatapp-3e90b",
//   storageBucket: "chatapp-3e90b.appspot.com",
//   messagingSenderId: "82131735713",
//   appId: "1:82131735713:web:f531ca73543b0e09e4cce0",
//   measurementId: "G-6Q6YJ2KP0M"
// };

// // Initialize Firebase
// //const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export function Example(){}



const Chat = () => {
    const [messages, setMessages] = useState([]);
useEffect(() =>{
    setMessages([
        {
            _id: 1, 
            text: "Hello Developer",
            createdAt: new Date(),
            user: {
                _id: 2, 
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
          },
      ])
    }, [])

    return (
      <View style={styles.container}>
        <Text> Chat Screen</Text>
        <Button title="Click here" onPress={() =>{}}/>
      </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Chat;


