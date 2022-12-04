import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, FlatList, ActvityIndicator, Alert, TouchableOpacity, Image, flex, ScrollView} from "react-native";




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
  const [username, setName,] = useState([
     {  key: '1', username: "Caroline"},
     {  key: '2', username: "David"},
     {  key: '3', username: "Emma"},
    
]);

const renderItem = ({ item }) => {
  console.log(item.username, "ITEM")
  
    return (
        <View style={styles.item}>
      <TouchableOpacity onPress={()=> {
        navigation.navigate("chatScreen", {"contactData": item})
      }}>
        <View style = {{flexDirection: 'row'}}>

            <Image
            style = {{width: 24, height: 24, alignSelf: 'center'}} 
            source={{
                uri: item.image,
              }}/>
            <Text style={styles.title}>{item.username}</Text>
           
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
        keyExtractor={item => item.key}
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
  