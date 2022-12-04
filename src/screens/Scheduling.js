// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput, ImageBackground, Button, SafeAreaView, Alert, TouchableOpacity, Image } from "react-native";

// module.exports = {

//     content: [
//       "./src/**/*.{js,jsx,ts,tsx}",
//     ],
  
//     theme: {
//       extend: {},
//     },
  
//     plugins: [],
  
//   }

//   import React, { useEffect, useState } from "react";
// import { gapi } from "gapi-script";
 
// function App() {
 
//   const calendarID = process.env.REACT_APP_CALENDAR_ID;
//   const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
//   const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;
 
//   return (
//     <div className="App pt-4">
//       <h1 className="text-2xl font-bold mb-4">
//         React App with Google Calendar API!
//       </h1>
//     </div>
//   );
// }



// const getEvents = (calendarID, apiKey) => {
    
//     function initiate() {
//       gapi.client
//         .init({
//           apiKey: apiKey,
//         })
  
//         .then(function () {
//           return gapi.client.request({
//             path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
//           });
//         })
  
//         .then(
//           (response) => {
//             let events = response.result.items;
//             return events;
//           },
//           function (err) {
//             return [false, err];
//           }
//         );
//     }
  
//     gapi.load("client", initiate);
  
//   };

//   import React, { useEffect, useState } from "react";
// import "./App.css";
// import { gapi } from "gapi-script";
// import Event from "./components/Event.js";
 
// function App() {
//   const [events, setEvents] = useState([]);
 
//   const calendarID = process.env.REACT_APP_CALENDAR_ID;
//   const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
//   const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;
 
//   const getEvents = (calendarID, apiKey) => {
//     function initiate() {
//       gapi.client
//         .init({
//           apiKey: apiKey,
//         })
//         .then(function () {
//           return gapi.client.request({
//             path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
//           });
//         })
//         .then(
//           (response) => {
//             let events = response.result.items;
//             setEvents(events);
//           },
//           function (err) {
//             return [false, err];
//           }
//         );
//     }
//     gapi.load("client", initiate);
//   };
 
//   useEffect(() => {
//     const events = getEvents(calendarID, apiKey);
//     setEvents(events);
//   }, []);
 
//   return (
//     <div className="App py-8 flex flex-col justify-center">
//       <h1 className="text-2xl font-bold mb-4">
//         React App with Google Calendar API!
//         <ul>
//           {events?.map((event) => (
//             <li key={event.id} className="flex justify-center">
//               <Event description={event.summary} />
//             </li>
//           ))}
//         </ul>
//       </h1>
//       </div>
//   )
//           };

          
 

//   REACT_APP_GOOGLE_API_KEY=""

// REACT_APP_GOOGLE_ACCESS_TOKEN=""

// REACT_APP_CALENDAR_ID=""









// function Scheduling () {

//     return (
//             <View style={styles.view4}>
//                 <Text style={styles.schedulingList}>
//                     scheduling: 
//                 </Text>
//                  </View>
//                 )
// }

// const styles = StyleSheet.create({
//     view4: {
//         alignSelf: 'center',
//         width: '100%',
//         height: '100%',
//         ImageBackground: '#6cacc4'
//     },

//     schedulingList: {

//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 100 ,
//         textAlign: 'center',
//         marginBottom:0,
//        fontSize: 36,
//     },


// });
// export default Scheduling;