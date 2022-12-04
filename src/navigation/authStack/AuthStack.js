
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {createStackNavigator} from "@react-navigation/stack"
import Login from "../../screens/Login";
import Home from "../../screens/Home";
import Contacts from "../../screens/Contacts";
// import Scheduling from "../../screens/Scheduling";
import TabNavigation from "../tabNavigation/TabNavigation";
import Quickhelp from "../../screens/Quickhelp";
import Chat from "../../screens/Chat";
import Signup from "../../screens/Signup";

const Stack = createStackNavigator ()

function AuthStack (){

return(
<Stack.Navigator>

<Stack.Screen
    name="loginScreen"
    component={Login}
    />

    <Stack.Screen
    name="tabNavigator"
    component={TabNavigation}
    options= {{
        title:"",
        headerShown: false

    }}
    />

    <Stack.Screen
    name="homeScreen"
    component={Home}
    />

<Stack.Screen
    name="contactScreen"
    component={Contacts}
    />
{/* 
<Stack.Screen
    name="schedulingScreen"
    component={Scheduling}
    /> */}

<Stack.Screen
    name="quickHelpScreen"
    component={Quickhelp}
    />

<Stack.Screen
    name="chatScreen"
    component={Chat}
    />

<Stack.Screen
    name="signupScreen"
    component={Signup}
    />





   

</Stack.Navigator>
)

};



export default AuthStack