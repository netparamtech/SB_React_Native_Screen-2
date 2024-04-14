import {View, Text, StyleSheet, ImageBackground} from "react-native";
//import Banner from "./Banner";


export const Home = () => {
    return (

    <ImageBackground source={require('../assets/image.jpg')} style={styles.background}>
    <View style={styles.container}>
        
        

        <Text style={styles.text}>
                Home Screen
        </Text>

        

    


    </View>
    </ImageBackground>
)
}

export default Home;

const styles  = StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
text: {
    fontSize:24,
    fontWeight: "bold",
    marginBottom: 16,
    color:'black'
},
background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  
  
})