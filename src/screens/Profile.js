import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity, Image } from "react-native";
import axiosInstance from "../extension/AxiosInstance";
import { navigationRef } from "../extension/RootNavigator";
import { setAsyncData,getAsyncData } from '../extension/ApiUtils'
import Loader from "../custom/Loader"
import AsyncStorage from '@react-native-async-storage/async-storage'
function Profile({navigation}){

    const [isLoading, setLoading] = useState(false)

    const logout = async ()=>{
        setLoading(true)
        const refreshToken = await getAsyncData("refresh")
        const data = {
            refreshToken:refreshToken
        }
        try {
            await axiosInstance.post("auth/logout",data).then((response)=>{
                if(response.code == 200){
                    AsyncStorage.clear()
                    setLoading(false)
                    navigation.replace('loginScreen',{})
                }
            })
        } catch (error) {
            console.log("ERROR ",error);
            setLoading(false)
        }
        
    }
    return(
        <View style={styles.view2}>
            <Loader loading={isLoading} />
            <TouchableOpacity
                style= {styles.fp}
                color= '#94AB67'
                onPress={() => {
                    logout()
            console.log("User wants to reset password")}}>
           <Text>
            Logout
           </Text> 
    </TouchableOpacity>
         </View>
    )
}

const styles = StyleSheet.create({
    view2: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        ImageBackground: '#6cacc4'
    },

    upcoming: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100 ,
        textAlign: 'center',
        marginBottom:0,
       fontSize: 36,
    },


});

export default Profile