import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = (props) => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
  
    const handleLogin = () => {

      const loginUrl = 'https://uat-api.socialbharat.org/api/login-by-password';

    // Data to be sent in the request body
    const data = {
      mobile: mobile,
      password: password
    };

    // Sending a POST request to the login API using Axios
    axios.post(loginUrl, data)
      .then(response => {
        // Checking if the response is successful
        if (response.status === 200) {

          //Extract user Information

          const { data, token } = response.data;

                // Save token and user information using AsyncStorage
                AsyncStorage.setItem('token', token.token)
                .then(()=> {
                    return AsyncStorage.setItem('user', JSON.stringify(data));
                    
                    
                })
                    .then(() => {
                        // Navigate to another screen

          // Do something with the response, e.g., navigate to another screen
          setLoginStatus('Login successful!');
          //console.log(JSON.stringify(data))
          console.log("Login successful");
 
        props.navigation.navigate('Drawernavigator')
      
      })
      .catch(error => {
        console.error('Error saving data:', error);
        Alert.alert('Error', 'An error occurred while saving user data.');
      });
    
      
      } else {
          // Handling errors
          setLoginStatus('Invalid username or password.');
          Alert.alert('Login failed', 'Please check your credentials and try again.');
        }
      })
      .catch(error => {
        
        if (error.response && error.response.status === 401) {
          console.error('Login failed: Invalid username or password');
          Alert.alert('Login failed', 'Invalid username or password. Please try again.');
        } else {
          console.error('Error:', error);
          Alert.alert('Error', 'An error occurred. Please try again later.');
        }
      });
      
      };
  
    return (
      <ImageBackground source={require('../assets/image4.jpg')} style={styles.background}>
        <View style={styles.container}>
  
          <Text style={styles.title}>Login</Text>
  
          <TextInput
            style={styles.input}
            placeholder="Username"  placeholderTextColor="gray"
            onChangeText={text => setMobile(text)}
            value={mobile}
          />
  
          <TextInput
            style={styles.input}
            placeholder="Password" placeholderTextColor="gray"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
  
          
          
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
  
          <Text style={styles.status}>{loginStatus}</Text>
  
        </View>
  
      </ImageBackground>
    );
  };

  
export default Login;
  
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

    button: {
      backgroundColor: 'red',
      paddingVertical: 15,
      paddingHorizontal: 20,
    
      marginHorizontal: 20,
      borderRadius: 25,
     
      
    },

    buttonText: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
    
  });