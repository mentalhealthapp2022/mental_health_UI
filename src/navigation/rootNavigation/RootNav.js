import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "../authStack/AuthStack";



function RootNav(){

return(

   <NavigationContainer>
<AuthStack/>


   </NavigationContainer>
)

};

export default RootNav
