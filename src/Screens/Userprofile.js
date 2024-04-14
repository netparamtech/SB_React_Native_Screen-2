import React,{useEffect, useState} from 'react';
import { View, Text, ScrollView } from 'react-native';



const Userprofile = () => {
  
  const [data ,setData] = useState([]);

  const getAPIData  = async() => {
//api call
const url = "https://jsonplaceholder.typicode.com/posts";
let result = await fetch(url);
result = await result.json();
setData(result);
    }

  useEffect(() =>{  getAPIData(); },[])
  

  return (

    <ScrollView style={{}}>

            <Text style={{ fontSize: 30, color:"black" }}>List with API call</Text>

    { 
    
            data.length ?

              data.map((item)=>

              <View style={{padding:10, borderBottomColor:"#ccc",borderBottomWidth:1}}>

              <Text style={{fontSize:20,color:"black"}}> Title : {item.title}</Text>
              <Text style={{fontSize:20, backgroundColor: "gray" }}>Id : {item.id}</Text>
              <Text style={{fontSize:20,color:"black"}}> Body : {item.body}</Text>

      
      </View> 
      ) 
      : 
      null
    }
    
  </ScrollView>

  )};

export default Userprofile;


    
    
    
  