import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Button} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from '@react-native-community/datetimepicker';
import  Icon from 'react-native-vector-icons/FontAwesome';
import ChoosePhoto from "./ChoosePhoto";


const CreateEvents = () => {
    const [date, setDate] = useState(new Date());

    
        const [startDate, setStartDate] = useState(null);
        const [endDate, setEndDate] = useState(null);
        const [showStartDatePicker, setShowStartDatePicker] = useState(false);
        const [showEndDatePicker, setShowEndDatePicker] = useState(false);
      
        const onStartDateChange = (event, selectedDate) => {
          setShowStartDatePicker(false);
          if (selectedDate) {
            setStartDate(selectedDate);
          }
        };
      
        const onEndDateChange = (event, selectedDate) => {
          setShowEndDatePicker(false);
          if (selectedDate) {
            setEndDate(selectedDate);
          }
        };
  

 
   

    return (

        <View style={styles.container}>

            <ScrollView style={styles.scroll}>

        <View style={styles.innerView}>
       <Text style={styles.hadding}>Create Event</Text>
       </View>

       
     <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10,marginTop:10}}>Event Type *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:20 }}>
        <TextInput placeholder='Select Event Type' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    <View>
        <Text style={{fontSize:15,fontWeight:'900', paddingBottom:10, marginBottom:10}}>Fill the details below to post events</Text>
    </View>

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Country *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Select Status' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>State *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Select Status' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>City *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Select Status' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Start Event data/ Time *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25, flexDirection:'row'}}>
        
        <Text style={{ paddingHorizontal: 10, fontSize:20, padding:10,  }} >{startDate ? startDate.toDateString() : 'Select Start Date'}</Text>
      {showStartDatePicker && (  <DatePicker value={date} mode="date" display="default" onChange={onStartDateChange} />  )}

           <TouchableOpacity onPress={() => {/* Handle Twitter Click */}}>
            <Icon name="calendar" size={25} color="#b5880d" style={styles.socialIcon} onPress={() => setShowStartDatePicker(true)} />
          </TouchableOpacity>
    </View>

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>End Event data/ Time *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25, flexDirection:'row' }}>
        
        <Text style={{ paddingHorizontal: 10, fontSize:20, padding:10,  }} >{endDate ? endDate.toDateString() : 'Select End Date'}</Text>
      {showEndDatePicker && (  <DatePicker value={date} mode="date" display="default" onChange={onEndDateChange} />  )}

           <TouchableOpacity onPress={() => {/* Handle Twitter Click */}}>
            <Icon name="calendar" size={25} color="#b5880d" style={styles.socialIcon} onPress={() => setShowEndDatePicker(true)} />
          </TouchableOpacity>
    </View>

    {/* <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Select Status' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View> */}

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Venue *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Select Status' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput>
    </View>

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Banner Image</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        {/* <TextInput placeholder='Select Status' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput> */}
        <ChoosePhoto/>
    </View>

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Thumb Image *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        {/* <TextInput placeholder='Select Status' style={{ paddingHorizontal: 10, fontSize:20 }}></TextInput> */}
        <ChoosePhoto/>
    </View>

    <View>
        <Text style={{fontSize:21, fontWeight:'900', paddingBottom:10}}>Description *</Text>
    </View>

    <View style={{borderColor: '#1255', borderWidth: 1, borderRadius: 5, marginBottom:25 }}>
        <TextInput placeholder='Enter Your Event Details If Any' style={{ paddingHorizontal: 10, fontSize:20 }} multiline={true}></TextInput>
    </View>

    <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Submit</Text>
    </TouchableOpacity>

    </ScrollView>

        </View>
    )
}

export default CreateEvents;

const styles  =  StyleSheet.create({

    container: {
        flex:1,
        //justifyContent:'center',
        alignItems:'centre',
        padding:5,
        margin:10
        
        
        
        
    },

    // placeholderStyle: {
    //     fontSize: 16,
    //   },
    //   selectedTextStyle: {
    //     fontSize: 16,
    //   },
    //   iconStyle: {
    //     width: 20,
    //     height: 20,
    //   },
    //   inputSearchStyle: {
    //     height: 40,
    //     fontSize: 16,
    //   },
    hadding: {
        fontWeight:'900',
        fontSize:25,
        color:'#000',
        padding:10,
        //backgroundColor:'#1276'
        
    },
    innerView: {
        marginTop:10,
        marginBottom:15,
        borderRadius:5,
        backgroundColor:'#1255'
     },
    scroll:{
        //padding :15,
        
        

    },
    btn:{
        borderRadius:8,
        backgroundColor:'#1255',
        //alignContent:'center',
        //justifyContent:'center',
        alignSelf: 'flex-start',
        marginTop:10

    },
    btnText:{
        fontSize:22,
        padding:10,
        alignItems:'center',
        fontWeight:'bold'
        
    },
    socialIcon:{
        paddingHorizontal:180,
        top:7
       //justifyContent:'flex-end'
    }
}

    
)