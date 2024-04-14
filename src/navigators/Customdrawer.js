import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



const Customdrawer =(props)=> {
    return(
        <View style={{flex:1}}>

            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'white'}}>

                <ImageBackground source={require('../assets/image.jpg')} style={{padding:20}}>
                    <Image source={require('../assets/image7.jpg')} style={{height:80, width:80,borderRadius:40,marginBottom:10}}></Image>
                    <Text style={{color:'black',fontSize:20, fontFamily:'Roboto-Medium',fontWeight:'bold'}}>Jitendra Pratap</Text>
                    <Text style={{color:'black',fontSize:12, marginTop:5}}>View Profile</Text>
                </ImageBackground>

                <View style={{flex:1,paddingTop:10}}>
                <DrawerItemList {...props}/>
                </View>

            </DrawerContentScrollView> 

<View style={{padding:20,backgroundColor:'#d6d6c9',borderTopColor:'#ccc'}}>
    

    
    
          <TouchableOpacity onPress={() => {/* Handle LinkedIn Click */}}>
            <Icon name="sign-out" size={30} color="#0077B5" style={{marginHorizontal:10}} />
            <Text style={{color:"black"}}>Signout</Text>
          </TouchableOpacity>
</View>



        </View>
    )
}

export default Customdrawer;

