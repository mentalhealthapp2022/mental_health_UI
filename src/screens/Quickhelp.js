import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity, Image, flex, ScrollView, FlatList, Linking } from "react-native";


// const articles = [
//     {name: "example 1", link: "link 1", articleImage: "example image 1"},
//     {name: "example 2", link: "link 2", articleImage: "example image 2"},
//     {name: "example 2", link: "link 2", articleImage: "example image 2"},
//     {name: "example 3", link: "link 3", articleImage: "example image 3"},
//     {name: "example 4", link: "link 4", articleImage: "example image 4"},
//     {name: "example 5", link: "link 5", articleImage: "example image 5"},
//     {name: "example 6", link: "link 6", articleImage: "example image 6"},
//     {name: "example 7", link: "link 7", articleImage: "example image 7"},
// ];

// const Quickhelp = ()=> {
//     return (
//         <SafeAreaView>
//              <FlatList data={articles}
//              renderItem={( {item} ) => (<Articles articles={item}/> )}> </FlatList>
//         </SafeAreaView>
//     );
// }; 

// class Articles extends React.Component {
//     render() {
//     const { name, link, articleImage } = this.props.article
//         return (
//             <View>
//                 <Image style = {{width: 150, hieght: 150}} source = {{ uri: articleImage}}/>
//                <Text>{name}</Text>
//                <Text>{link}</Text>
//                <Text>{articleImage}</Text>
//             </View>
//         );

//     };
    
// };

// export default Quickhelp;


























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
  
export default function Quickhelp(){
  const [name, setName,] = useState([
     { name: 'Diets worldwide only slightly healthier than 30 years ago', key: '1', image:"https://www.cause.org.uk/GetImage.aspx?IDMF=e9c4f862-63ef-4809-816b-edf52c2c6738&w=571&h=819&src=mc" , link: "https://www.medicalnewstoday.com/articles/diets-worldwide-only-slightly-healthier-than-30-years-ago"},
     { name: 'article two', key: '2', image:"https://www.cause.org.uk/GetImage.aspx?IDMF=e9c4f862-63ef-4809-816b-edf52c2c6738&w=571&h=819&src=mc" , link: "https://www.medicalnewstoday.com/articles/diets-worldwide-only-slightly-healthier-than-30-years-ago"},
     { name: 'article three', key: '3', image:"https://www.cause.org.uk/GetImage.aspx?IDMF=e9c4f862-63ef-4809-816b-edf52c2c6738&w=571&h=819&src=mc" , link: "https://www.medicalnewstoday.com/articles/diets-worldwide-only-slightly-healthier-than-30-years-ago"},
     { name: 'article four', key: '4', image:"https://www.cause.org.uk/GetImage.aspx?IDMF=e9c4f862-63ef-4809-816b-edf52c2c6738&w=571&h=819&src=mc" , link: "https://www.medicalnewstoday.com/articles/diets-worldwide-only-slightly-healthier-than-30-years-ago"},
     { name: 'article five', key: '5', image:"https://www.cause.org.uk/GetImage.aspx?IDMF=e9c4f862-63ef-4809-816b-edf52c2c6738&w=571&h=819&src=mc" , link: "https://www.medicalnewstoday.com/articles/diets-worldwide-only-slightly-healthier-than-30-years-ago"},
     { name: 'article six', key: '6', image:"https://www.cause.org.uk/GetImage.aspx?IDMF=e9c4f862-63ef-4809-816b-edf52c2c6738&w=571&h=819&src=mc" , link: "https://www.medicalnewstoday.com/articles/diets-worldwide-only-slightly-healthier-than-30-years-ago"},
     { name: 'article seven', key: '7', image:"https://www.cause.org.uk/GetImage.aspx?IDMF=e9c4f862-63ef-4809-816b-edf52c2c6738&w=571&h=819&src=mc" , link: "https://www.medicalnewstoday.com/articles/diets-worldwide-only-slightly-healthier-than-30-years-ago"},
     { name: 'article eight', key: '8', image:"https://www.cause.org.uk/GetImage.aspx?IDMF=e9c4f862-63ef-4809-816b-edf52c2c6738&w=571&h=819&src=mc" , link: "https://www.medicalnewstoday.com/articles/diets-worldwide-only-slightly-healthier-than-30-years-ago"},
]);

const renderItem = ({ item }) => {
    return (
        <View style={styles.item}>
      <TouchableOpacity onPress={()=> {
        Linking.openURL(item.link)
      }}>
        <View style = {{flexDirection: 'row'}}>

            <Image
            style = {{width: 85, height: 85, alignSelf: 'center'}} 
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
        data={name}
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
      fontSize: 20,
    },

  });
  