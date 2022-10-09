import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity, Image } from "react-native";

function Home () {


return(
    <View style={styles.view2}>
        <Text style={styles.text1}>
            Upcoming Meetings: 
        </Text>
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
        export default Home 