import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native"
//import Icon from "react-native-vector-icons/FontAwesome"


const DashBoardCard =({backgroundColor, title, subtitle, view, edit, imagePath}) => {
    return (
              //<ScrollView>
        <View style={styles.container}>
        <View style={[styles.card,{backgroundColor}]}>

        <View style= {{flexDirection: "row", justifyContent:'space-between'}}> 

        <View>
              <Text style={styles.txt}>{title}</Text>
              <Text style={styles.headding}>{subtitle}</Text>
        </View>

        <View style={{ marginTop:10,}}>
             {/* <Icon name={icon} size={25} color="#000" style={styles.socialIcon} /> */}
             <Image source={imagePath} style={styles.image} />
        </View>

        </View>

        <View style={{flexDirection:"row", borderTopWidth:1, justifyContent:'space-between', borderColor:'#558554'}}>
            <TouchableOpacity style={styles.button}> 
            <Text style={styles.txt}>{view}</Text> 
            </TouchableOpacity>
            <TouchableOpacity>
               <Text style={styles.txt}>{edit}</Text> 
            </TouchableOpacity>
        </View>

        </View>
        </View>

        //</ScrollView>
    )}

    const DashBoard = () => {
        return (
          <ScrollView>
            
              <DashBoardCard backgroundColor="#025E73" title="Profile" subtitle="Manage Profile" view="View" edit="Edit" imagePath={require('../assets/activities.png')} />
              <DashBoardCard backgroundColor="#6AA668" title="Become Social" subtitle="Search Member" view="Search" edit="Edit" imagePath={require('../assets/searchPeople.png')}/>
              <DashBoardCard backgroundColor="#F28157" title="Matrimonial" subtitle="Matrimonial" view="Search" edit="Edit" imagePath={require('../assets/wedding.png')}/>
              <DashBoardCard backgroundColor="#8C654F" title="Business" subtitle="Business Promotion" view="Search" edit="Post Your Ad" imagePath={require('../assets/financial-profit.png')}/>
              <DashBoardCard backgroundColor="#634A00" title="Event" subtitle="Events(s)" view="Search" edit="Post Event" imagePath={require('../assets/placard.png')}/>
              <DashBoardCard backgroundColor="#8C654F" title="Event" subtitle="Social Activities" view="Search" edit="Post Activity" imagePath={require('../assets/activity.png')}/>
              <DashBoardCard backgroundColor="#BF7E6F" title="Services" subtitle="Services" view="Search" edit="Use Service" imagePath={require('../assets/fe.png')}/>
              <DashBoardCard backgroundColor="#6C757D" title="Jobs" subtitle="Jobs" view="Search" edit="Post Jobs" imagePath={require('../assets/jobs.jpg')}/>
              <DashBoardCard backgroundColor="#009BCE" title="Share Your Feedback" subtitle="Feedback" view="Give Feedback" edit="View Feedbacks" imagePath={require('../assets/fe.png')}/>
              
            
          </ScrollView>
        );
      };

export default DashBoard;


styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems: "center",
     },

    txt: {
        color:"#ffffff",
        fontSize:18,
        marginTop:5
    },
    card: {
          
    backgroundColor: '#ffffff',
    marginBottom: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    margin: 20,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    padding: 20,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 40,
    width:"90%",
    marginTop:30,
    
 },

      headding: {
        fontSize:20,
        fontWeight:"900",
        marginBottom:15,
        color:"#ffffff"
        
      },

    Line: {
        //borderBottomWidth:2,
        
    },
    socialIcon:{
        
    },
    image:{
        height:40,
        width:40
    }


})