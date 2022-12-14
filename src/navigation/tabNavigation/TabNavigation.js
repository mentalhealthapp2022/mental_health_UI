import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from "../../screens/Login";
import Home from "../../screens/Home";
import Contacts from "../../screens/Contacts";
import Scheduling from "../../screens/Scheduling";
import Quickhelp from "../../screens/Quickhelp";
import Profile from "../../screens/Profile"

const BottomTab = createBottomTabNavigator();

function TabNavigation () {
return(
    <BottomTab.Navigator
    >
  
  <BottomTab.Screen 
        name="homeScreen" 
        component={Home}
        options={
          {title: "Meetings", 
          tabBarIcon: ({ color }) => (
            <Image
            style={[styles.menuIcon, { tintColor: color }]}
                source={require('../../assests/images/home.png')}
            />
             )
        }
    }
  />

<BottomTab.Screen 
        name="contactScreen" 
        component={Contacts}
        options={
          {title: "Contacts", 
          tabBarIcon: ({ color }) => (
            <Image
            style={[styles.menuIcon, { tintColor: color }]}
                source={require('../../assests/images/contact.png')}
            />
             )
        }
    }
  />

{/* <BottomTab.Screen 
        name="schedulingScreen" 
        component={Scheduling}
        options={
          {title: " ", 
          tabBarIcon: ({ color }) => (
            <Image
            style={[styles.menuIcon, { tintColor: color }]}
                source={require('../../assests/images/calendar.png')}
            />
             )
        }
    }
  /> */}

<BottomTab.Screen 
        name="QuickhelpScreen" 
        component={Quickhelp}
        options={
          {title: "Quick Help", 
          tabBarIcon: ({ color }) => (
            <Image
            style={[styles.menuIcon, { tintColor: color }]}
                source={require('../../assests/images/question.png')}
            />
             )
        }
    }
  />

<BottomTab.Screen 
        name="profileScreen" 
        component={Profile}
        options={
          {title: "Profile", 
          tabBarIcon: ({ color }) => (
            <Image
            style={[styles.menuIcon, { tintColor: color }]}
                source={require('../../assests/images/person.png')}
            />
             )
        }
    }
  />

    </BottomTab.Navigator>
    
        )
}

        const styles = StyleSheet.create({
            menuIcon: {
                width: 25,
                height: 25,
                marginTop:5
            },
        

        });
        export default TabNavigation 