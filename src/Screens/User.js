import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Function to retrieve user information from AsyncStorage
    AsyncStorage.getItem('user')
      .then(userData => {
        if (userData) {
          // Parse the retrieved JSON data and set it to the state
          setUser(JSON.parse(userData));
          //console.log(JSON.parse(userData))
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <View style={styles.container}>
      {user ? (
        <>
          
          <Text style={styles.text}>Name - {user.name}</Text>
          <Text style={styles.text}>Email - {user.email}</Text>
          <Text style={styles.text}>Mobile - {user.mobile}</Text>
          <Text style={styles.text}>Gender - {user.gender}</Text>
          <Text style={styles.text}>image - {user.photo}</Text>
          

          {/* Render other user information as needed */}
        </>
      ) : (
        <Text style={styles.text}>No user information available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    padding: 20,
    backgroundColor:'rgb(231, 239, 255);'
    
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'red'
  },
  text: {
    fontSize: 16,
    fontWeight:'bold',
    marginBottom: 20,
    fontFamily: 'CustomFontBold',
    color:'black'
  },
});

export default User;
