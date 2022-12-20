import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "../authStack/AuthStack";
import { navigationRef } from "../../extension/RootNavigator"



function RootNav(){

return(

   <NavigationContainer ref={navigationRef}>
<AuthStack/>


   </NavigationContainer>
)

};

export default RootNav
