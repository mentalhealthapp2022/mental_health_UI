import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity, Image } from "react-native";

function Login ({navigation}) {
    const [userid, setUserid]=useState("")
    const [password, setPassword]=useState()

    return(
<View style={styles.view1}>
    <View style={styles.section1}>
    <Text style={styles.text1}>
        Welcome to the Mental Health App
    </Text>
    <Image style={styles.image1} source={require('../assests/images/person.png')}/>
    </View>
    <View style={styles.section2}>
        <Text style={styles.loginText}>
            Login
        </Text>
        <Text style={styles.pleaseLogin}>
            Please Login to Continue
        </Text>
    <TextInput
        style={styles.input}
        placeholder= 'User id'
        onChangeText={(text) => {
            setUserid(text)
        }}
      />
      <TextInput
        style={styles.inputpassword}
        placeholder= 'Password'
        secureTextEntry= {true}>
      </TextInput>
    </View>
<View style={styles.section3}>
<TouchableOpacity 
    style={styles.button}
    title= "Login"
    color= '#96b58b'
    onPress={() => {
        navigation.navigate("tabNavigator", {})
        console.log ("sign up pressed " + userid)}}>
        <Text>
            Login
        </Text>
    </TouchableOpacity>
    <TouchableOpacity
        style= {styles.fp}
        title= "Forgot Password"
        color= '#94AB67'
        onPress={() => {
            navigation.navigate("resetPasswordScreen")
            console.log("User wants to reset password")}}>
           <Text>
             Click here to reset your password
           </Text> 
    </TouchableOpacity>
    
<TouchableOpacity
style={styles.createAccount}
title= "Create Account"
color='#94AB67' 
onPress={() => {
navigation.navigate("signupScreen")
console.log ("User pressed create account")}}>
    <Text>
        Click here to create an account
    </Text>
</TouchableOpacity>
</View>
     
</View>
    )
}



const styles = StyleSheet.create({
    view1: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        ImageBackground: '#6cacc4'
    },
    text1: {
        
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100 ,
        textAlign: 'center',
        marginBottom:0,
       fontSize: 36,
    },
    input: {
        borderRadius:20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
        borderWidth: 1,
        padding: 10,
        
    
      },
      inputpassword: {
        borderRadius: 20,
        marginTop: 20,
        height:50,
        borderWidth: 1,
        padding: 10,
    
      },
      button: {
    borderRadius: 20,
       backgroundColor: '#94AB67',
       width: '60%',
       padding: 10,
       alignItems:'center',
       justifyContent: 'center',
       alignSelf:'center'
      },
      createAccount: {
        justifyContent:'center',
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 22,
        color: '#94AB67'
         
      },
      fp: {
        justifyContent:'center',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 18,
      },
      section2:{

      paddingHorizontal: 20,
      paddingVertical: 40,
    

      },
    section1:{
    
        },
    section3:{
           
            },
    image1:{
  width: 120,
  height: 120,
  justifyContent: 'center',
  alignSelf:'center',
  marginTop: 40
   },
   loginText: {
    marginBottom: 5,
    fontSize: 22,
    fontWeight: 'bold'

   },
   pleaseLogin: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '100'
   },

   

        

    

      


});
export default Login