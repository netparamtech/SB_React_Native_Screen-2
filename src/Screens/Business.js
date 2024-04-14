import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



const Business = (props) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {

    AsyncStorage.getItem('token')
    
      .then(token => {
        //console.log(token)
        
        if (token) {
          return axios.get('https://uat-api.socialbharat.org/api/business/search?q', {
            headers: {
                Authorization: `Bearer ${token}`
            }

          });

        } else {
          throw new Error('Token not found in AsyncStorage');
        }
      })

      .then(response => {
        setMembers(response.data.data);
      })

      .catch(error => {
        console.error('Error fetching data:', error);
        });


  }, []);

  return (
    
    <ScrollView contentContainerStyle={styles.container}>

      <View style={{marginBottom:10}}>

          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('BusinessInfo')}>
            <Text style={styles.buttonText}>Promote Your Business</Text>
          </TouchableOpacity>

          </View>

<TextInput placeholder='Search Business' style={styles.Textinput}>

    <Icon name="search" size={20} color="#3b5998" style={styles.socialIcon} />
</TextInput>

{/* "id": 1,
            "business_name": "Ambition classes",
            "business_category": "Aboriginal Art Gallery",
            "street_address": "123",
            "country": "India",
            "state": "Rajasthan",
            "city": "Jaipur",
            "contact1": "7877649916",
            "contact2": "7877649915",
            "contact3": "1212121212",
            "business_email": null,
            "business_website": null,
            "business_photos": null,
            "user_id": 2,
            "status": null,
            "description": null,
            "google_map_link": null,
            "name": "MAC" */}

      {members.map(member => ( 
        <View key={member.id} style={styles.businessCard}>
            

          <Text style={styles.businessName}>{member.business_name}</Text>
          <Text style={styles.businessCategory}>Category - {member.business_category}</Text>
          <Text style={styles.businessCategory}>Posted by - {member.name}</Text>
          <Text style={styles.businessLocation}>Address - {member.city}, {member.state}, {member.country}</Text>
          <Text style={styles.businessContact}>Contact - {member.contact1}</Text>
          
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor:'#1272'
  },
  businessCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color:'black'
  },
  businessName: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
    color:'black'
  },
  businessCategory: {
    fontSize: 16,
    marginBottom: 4,
    color:'black'
  },
  businessLocation: {
    fontSize: 16,
    marginBottom: 4,
    color:'black'
  },
  businessContact: {
    fontSize: 16,
    color:'black'
  },

  Textinput: {
    backgroundColor:'#fff',
     
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2}
},

button: {
  backgroundColor:'#1255',
  borderRadius:8,
  
  marginBottom:10

},
buttonText: {
  fontSize:20,
  padding:10,
  textAlign:'center',
  fontWeight:'900',
}
});

export default Business;
