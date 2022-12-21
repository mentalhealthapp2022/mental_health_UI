import React, { useEffect } from "react"
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity, Image } from "react-native";
import { setAsyncData,getAsyncData } from '../extension/ApiUtils'


function SplashScreen ({navigation}){
    useEffect(()=>{

        checkToken()
    },[])

    const checkToken = async ()=>{
        const token = await getAsyncData('token');
        const refreshToken = await getAsyncData('refresh');
        console.log("TOKEN "+JSON.stringify(token));
        console.log("TOKEN R"+JSON.stringify(refreshToken));
        setTimeout(()=>{
            if(token){
                navigation.replace("tabNavigator", {})
            } else {
                navigation.replace("loginScreen", {})
            }
        },3000)
        
    }
    return(
        <View style={styles.container}>
            <Text>Welcome</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default SplashScreen