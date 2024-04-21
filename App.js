import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/Screens/Welcome';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/Signup';
import Drawernavigator from './src/navigators/Drawernavigator';
import BusinessForm from './src/Screens/BusinessInfo';
import CreateEvents from './src/Screens/CreateEvents';




const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      
      <Stack.Navigator>

      <Stack.Screen name='Welcome' component={Welcome} 
      options={{title:"Welcome",headerTintColor: 'white', headerTransparent: true,headerStyle:{backgroundColor:'black'}}}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Signup' component={SignUp}/>
      <Stack.Screen name='Drawernavigator' component={Drawernavigator} options={{ headerShown: false }}/>
      <Stack.Screen name='BusinessForm' component={BusinessForm} options={{ headerShown: false }}/>
      <Stack.Screen name='Create Events' component={CreateEvents} options={{ headerShown: false }}/>
      
      </Stack.Navigator>
      
        

    </NavigationContainer> 
    
    
    
)};



  



export default App;

