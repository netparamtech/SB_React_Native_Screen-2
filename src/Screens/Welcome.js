import React from 'react';
import  Icon from 'react-native-vector-icons/FontAwesome';
//import { BlurView } from '@react-native-community/blur';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


const Welcome = (props) => {
  return (

    
    <ImageBackground source={require('../assets/image3.jpg')} style={styles.background}>



      <View style={styles.container}>

        <Text style={styles.title}>Welcome In Our Application</Text>

        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Signup")}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* <Icon name="rocket" size={30} color="#900" /> */}

          </View>

          <View style={styles.socialContainer}>

          <TouchableOpacity onPress={() => {/* Handle Twitter Click */}}>
            <Icon name="twitter" size={30} color="#1DA1F2" style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {/* Handle Facebook Click */}}>
            <Icon name="facebook" size={30} color="#3b5998" style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {/* Handle Instagram Click */}}>
            <Icon name="instagram" size={30} color="#C13584" style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {/* Handle LinkedIn Click */}}>
            <Icon name="linkedin" size={30} color="#0077B5" style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        

      </View>
      
    </ImageBackground>
   
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background:'blur'
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 20,
  
    marginHorizontal: 20,
    borderRadius: 30,
    },

  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  socialIcon: {
    marginHorizontal: 10,
  },

  socialContainer: {
    flexDirection:'row',
    marginTop:30

  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  
});

export default Welcome;
