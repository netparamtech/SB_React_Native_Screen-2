import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, BackHandler} from 'react-native'



const Activity = () => {

    return (

        <View style={styles.container}>

            <View style={BackHandler}>
                <Text>Text</Text>
            </View>

            <View style={styles.Outercard}>

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                
                <Text style={styles.title}>Activity</Text>
                

            
                <TouchableOpacity style={{backgroundColor:'#198754', borderRadius:5}}>
                    <Text style={styles.text}>View all activities</Text>
                </TouchableOpacity>
            
    </View>

            

                  
                  
                    
                  <TextInput style={styles.textInput} placeholder="Enter your title"></TextInput>
                   
            

            <View style={styles.card}>
                
            <Text style={styles.text}>Select Image</Text>
            </View>
            <View>

            <TextInput style={styles.textInput} placeholder="Enter description" multiline={true} numberOfLines={3}></TextInput>

            </View>

            <View style={{backgroundColor:'#006B5D', alignItems:'center' }}>
            <TouchableOpacity>
                <Text style={styles.btntext}>Submit</Text>
            </TouchableOpacity>
            </View>

            </View>
        </View>
    )
}

export default Activity;

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'yellow'
    },
    
    card:{
        
        padding:40,
        elevation:8,
        backgroundColor:'white',
        shadowColor:'black',
        borderColor:'black',
        borderRadius:5,
        shadowRadius:5,
        shadowOpacity:0.1,
        shadowOffset: {width:0, height:5},
        alignItems:'center',
        marginTop:30
},

Outercard:{
        
    //padding:40,
    elevation:10,
    backgroundColor:'white',
    shadowColor:'black',
    borderColor:'black',
    borderRadius:5,
    shadowRadius:5,
    shadowOpacity:0.1,
    shadowOffset: {width:0, height:5},
    padding:40,
    width:'90%',
    height:'auto'
    
    
    
},

title:{
    fontSize:25,
    fontWeight:'900'
},

  text:{
        color:'black',
        fontSize:15,
        fontWeight:'900',
        padding:10,
         },

   textInput:{
    fontSize:20,
    padding:15,
    borderColor:'black',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:5,
    marginVertical:30
   },

   inputContainer:{
    borderColor:'black',
    borderWidth:1,
    margin:20
     },

     btntext:{

    fontSize:20,
    padding:10,
    fontWeight:'bold',
        
     }
})