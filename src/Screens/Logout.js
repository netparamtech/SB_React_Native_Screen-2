import React from 'react';
import { View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing authentication tokens or user data

const SignOutScreen = ({ navigation }) => {
  // Function to handle signout button press
  const handleSignOut = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem('authToken')
        .then(() => {
          // Resolve the promise with a success message
          resolve('Signout successful');
        })
        .catch(error => {
          // Reject the promise with an error message
          reject(error);
        });
    });
  };

  // Function to handle signout button press
  const handleSignOutPress = () => {
    handleSignOut()
      .then(message => {
        // Navigate the user to the login screen or another destination
        navigation.navigate('Login'); // Replace 'Login' with the name of your login screen

        // Show success message
        Alert.alert('Success', message);
      })
      .catch(error => {
        console.error('Error signing out:', error);
        Alert.alert('Error', 'An error occurred while signing out. Please try again later.');
      });
  };

  return (
    <View>
      <Button title="Sign Out" onPress={handleSignOutPress} />
    </View>
  );
};

export default SignOutScreen;
