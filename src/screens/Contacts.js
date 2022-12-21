import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, FlatList, ActvityIndicator, Alert, TouchableOpacity, Image, flex, ScrollView} from "react-native";
import Loader from "../custom/Loader"
import axiosInstance from "../extension/AxiosInstance";

const Item = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={()=> {
        Linking.openURL(item.link)
      }}>
        <View style = {{flexDirection: 'row'}}>

            <Image
            style = {{width: 24, height: 24, alignSelf: 'center'}} 
            source={{
                uri: item.image,
              }}/>
            <Text style={styles.title}>{item.name}</Text>
           
        </View>
      </TouchableOpacity>
    </View>
  );
  
export default function Contacts({navigation}){
  const [isLoading, setLoading] = useState(false)
  const [username, setName,] = useState([
     {  key: '1', username: "Caroline"},
     {  key: '2', username: "David"},
     {  key: '3', username: "Emma"},
    
]);

useEffect(()=>{
  const users = getUserData()
},[])

const getUserData = async()=>{
  setLoading(true)
  try {
    await axiosInstance.get("users").then((response)=>{
      if(response.code == 200){
        console.log("res ",response);
        setName(response.data.results)
        setLoading(false)
      }
    })
  } catch (error) {
    console.log("ERROR ",error);
    setLoading(false)
  }
}

const renderItem = ({ item }) => {
  console.log(item.name, "ITEM")
  
    return (
        <View style={styles.item}>
          <Loader loading={isLoading} />
      <TouchableOpacity onPress={()=> {
        navigation.navigate("chatScreen", {"contactData": item})
      }}>
        <View style = {{flexDirection: 'row'}}>

            <Image
            style = {{width: 24, height: 24, alignSelf: 'center'}} 
            source={{
                uri: item.image,
              }}/>
            <Text style={styles.title}>{item.name}</Text>
           
        </View>
      </TouchableOpacity>
    </View>
    )
    // <Item item={item} />
            };

return(
    <View style={styles.container}>

<FlatList
        data={username}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
         
     {/* <ScrollView> 
        { name. map((item) => {
          return (
            <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
</ScrollView> */}
   
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#94AB67',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },

  });
  