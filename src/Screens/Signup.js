import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';


const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
  
    const handleSignup = () => {
      
      
    };
  
    return (
      <ImageBackground source={require('../assets/image4.jpg')} style={styles.background}>
        <View style={styles.container}>
  
          <Text style={styles.title}>Signup</Text>
  
          <TextInput
            style={styles.input}
            placeholder="Username"  placeholderTextColor="gray"
            onChangeText={text => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"  placeholderTextColor="gray"
            onChangeText={text => setUsername(text)}
            value={username}
          />
  
          <TextInput
            style={styles.input}
            placeholder="Password" placeholderTextColor="gray"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
  
          
  
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
  
        </View>
  
      </ImageBackground>
    );
  };

  
export default Signup;
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
      fontSize: 30,
      marginBottom: 30,
      color: '#fff', 
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingLeft: 10,
      backgroundColor: 'white',
      color:'black',
      borderRadius:25,
      
      
    },
    status: {
      marginTop: 20,
      color: '#fff',
    },
    buttonText: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },

    button: {
      backgroundColor: 'red',
      paddingVertical: 15,
      paddingHorizontal: 20,
    
      marginHorizontal: 20,
      borderRadius: 25,
     
      
    },
  });