import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity, Image } from "react-native";

function Scheduling () {

    return (
            <View style={styles.view4}>
                <Text style={styles.schedulingList}>
                    scheduling: 
                </Text>
                 </View>
                )
}

const styles = StyleSheet.create({
    view4: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        ImageBackground: '#6cacc4'
    },

    schedulingList: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100 ,
        textAlign: 'center',
        marginBottom:0,
       fontSize: 36,
    },


});
export default Scheduling