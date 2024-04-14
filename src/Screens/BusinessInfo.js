import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import ChoosePhoto from '../components/ChoosePhoto';


const BusinessInfo = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [contact1, setContact1] = useState('');
  const [contact2, setContact2] = useState('');
  const [contact3, setContact3] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [status, setStatus] = useState('');
  const [businessWebsite, setBusinessWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [googleMap, setGoogleMap] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <View style={{backgroundColor:'#1272'}}>
        <ScrollView style={styles.card}>

    <View style={{backgroundColor:'#1255', justifyContent:'center', borderRadius:7}}>
        <Text style={{fontSize:25,fontWeight:'900',padding:5}}>Business Info</Text>
    </View>

    <View style={styles.innercard}>

    {/* Business Name */}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Business Name *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Enter Business Name' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    {/* Business Type *  */}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Business Type *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5,marginBottom:25 }}>
        <TextInput placeholder='Select Business Type' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    {/* Street Address *  */}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Street Address *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Enter Street Address' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    {/* Country *  */}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Country *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Select' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    {/* State */}


    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>State *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Select' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

   {/* City */}
    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>City *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Select' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    {/* Contact 1*/}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Contact 1 *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Enter Contact 1' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>


    {/* Contact 2*/}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Contact 2 *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Enter Contact 2' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    {/* Contact 3*/}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Contact 3 *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Enter Contact 3' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>


    {/* Business Photo*/}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Business Photos *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        {/* <TextInput placeholder='Enter Contact 3' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput> */}

        <ChoosePhoto/>
    </View>

    {/* Business Email */}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Business Email *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Enter Business Email' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    {/* Status */}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Status *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Select Status' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    {/* Business Website */}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Business Website *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Enter Business Website Link' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    {/* Description  */}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Description *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Enter Description' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    {/* Set Google Map   */}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Set Google Address *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Set Google Address' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    

        </View>

    </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top', // For multiline input to start from the top
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 16,
    marginBottom:16,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    margin: 12,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    padding: 20,
        
  },

  innercard: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 5,
    marginBottom: 10,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal:2,
    marginTop:20,
    
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    padding: 20,
        
  },
});

export default BusinessInfo;
