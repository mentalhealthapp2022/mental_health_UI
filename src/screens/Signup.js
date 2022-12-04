
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity, Image } from "react-native";

function Signup ({navigation}) {
    const [id, createUserid]=useState("")
    const [pass, createPassword]=useState()

    return(
<View style={styles.v1}>
    <View style={styles.sec1}>
    <Text style={styles.pleaseSignup}>
        Sign Up 
    </Text>
    <Image style={styles.image1} source={require('../assests/images/person.png')}/>
    </View>
    <View style={styles.sec2}>
        <Text style={styles.signupText}>
           Create a username and password to sign up 
        </Text>
        <Text style={styles.pleaseContinue}>
            Press Sign up to Continue
        </Text>
    <TextInput
        style={styles.inputNewUsername}
        placeholder= 'Username'
        onChangeText={(text) => {
            setUserid(text)
        }}
      />
      <TextInput
        style={styles.inputNewPassword}
        placeholder= 'Password'
        secureTextEntry= {true}>
      </TextInput>
    </View>
<View style={styles.sec3}>
<TouchableOpacity 
    style={styles.SignupButton}
    title= "Sign up"
    color= '#96b58b'
    onPress={() => {
        navigation.navigate("tabNavigator", {})
        console.log ("sign up pressed " + id)}}>
        <Text>
            Sign up
        </Text>
    </TouchableOpacity>
    <Text style= {styles.fp}>
        Already have an account? 
    </Text>
<TouchableOpacity
style={styles.haveAccount}
title= "Have an account?"
color='#94AB67' 
onPress={() => {
    navigation.navigate("loginScreen")
    console.log ("already have account")}}>
    <Text>
        Click here to go to login screen
    </Text>
</TouchableOpacity>
</View>
     
</View>
    )
}



const styles = StyleSheet.create({
    v1: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        ImageBackground: '#6cacc4'
    },
    pleaseSignup: {
        
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100 ,
        textAlign: 'center',
        marginBottom:0,
       fontSize: 36,
    },
    inputNewUsername: {
        borderRadius:20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
        borderWidth: 1,
        padding: 10,
        
    
      },
      inputNewPassword: {
        borderRadius: 20,
        marginTop: 30,
        height:50,
        borderWidth: 1,
        padding: 10,
    
      },
      SignupButton: {
    borderRadius: 20,
       backgroundColor: '#94AB67',
       width: '60%',
       padding: 10,
       alignItems:'center',
       justifyContent: 'center',
       alignSelf:'center'
      },
      haveAccount: {
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
      sec2:{

      paddingHorizontal: 20,
      paddingVertical: 40,
    

      },
    sec1:{
    
        },
    sec3:{
           
            },
    image1:{
  width: 135,
  height: 135,
  justifyContent: 'center',
  alignSelf:'center',
  marginTop: 50
   },
   pleaseSignup: {
    marginBottom: 5,
    fontSize: 22,
    fontWeight: 'bold'

   },
   pleaseContinue: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '100'
   },

        

    

      


});

export default Signup;






// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity, Image } from "react-native";

// function Signup ({navigation}) { 
//     const [createid, createUserid] = useState("")
//     const [createpass, createPassword] = useState()

//   return(
// <View style ={styles.mainBackground}>
//     <View style={styles.sec1}>
//         <Text style={styles.title}>
//             Sign Up to Create an Account
//         </Text>
//     </View>
// </View>
// <View style={styles.sec2}>
//     <Text style={styles.createLogin}>
//    Create your login by making a username and password
//     </Text>
// </View>



// )

// }

// const styles = StyleSheet.create({
//     mainBackground: {
//         alignSelf: 'center',
//         width: '100%',
//         height: '100%',
//         ImageBackground: '#6cacc4'
//     },

//     title: {
//         alignSelf: 'center',
//         width: '100%',
//         height: '100%',
//         ImageBackground: '#6cacc4'
//     },

//     sec1: {
        

//     }

// })



