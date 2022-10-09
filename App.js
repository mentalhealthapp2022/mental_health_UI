import { 
  
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  ActivityIndicator,
  View,
  TouchableOpacity
  } from 'react-native';
 import Login from './src/screens/Login'
 import Home from './src/screens/Home'

import React,{ useCallback, useState } from 'react';
import RootNav from './src/navigation/rootNavigation/RootNav';


  
  const App = () => {
     const[input,setInput] = useState("");
     const [loading,setLoading] = useState(false);
     const [data,setData] = useState([]);

const api = {
  key: '21cc4532fee2abf0bdeab0109c7abea5',
  baseURL: 'https://api.openweathermap.org/data/2.5/'
}
     const fetchDataHandler = useCallback(() => {
      console.log('Print'+ input)
      setLoading(true)
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=21cc4532fee2abf0bdeab0109c7abea5`)
      .then((res) => {
        console.log(res)
        setData(res.data)
        setLoading(false)
      })

      // setInput("")
      // axios({
      //   method: "GET",
      //   URL: `https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=metric&appid=21cc4532fee2abf0bdeab0109c7abea5`
      // })
      // .then(res=> {
      //   console.log(res.data)
      //   setData(res.data)
      // })
      // .catch(e => console.dir(e))
      // .finally(() => setLoading(false))
    }, [api.key,input])
      
        
 
  return(
  
<RootNav>
  
</RootNav>

     
  )
 
}
const styles = StyleSheet.create({
  root: {
      flex:1,
  },

  image: {
      flex:1,
      flexDirection: "column", 
  },

  textInput: {
    borderBottomWidth: 3,
    paddingVertical: 20,
    marginVertical: 100,
    marginHorizontal:10,
    backgroundColor: "#fff",
    fontSize: 19,
    borderRadius: 16,
    borderBottomColor: "#df8e00",
  },
  infoView: {
    alignItems: 'center',
   },
  cityCountryText: {
    color:"#fff",
    fontSize: 40,
    fontWeight: 'bold',
  }, 

  dateText: {
    color: "#fff",
    fontSize: 22,
    marginVertical:10,
  }
});
export default App;
