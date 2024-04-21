import "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator}  from "@react-navigation/drawer";
import Userprofile from "../Screens/Userprofile";
import Profile from "../Screens/Profile";
import { Home } from "../Screens/Home";
import Customdrawer from "./Customdrawer";
import User from "../Screens/User";
import Business from "../Screens/Business";
import BusinessForm from "../Screens/BusinessInfo";
import DashBoard from "../Screens/DashBoard";




const Drawer = createDrawerNavigator();

export default function Drawernavigator() {
  return (
    
      <Drawer.Navigator drawerContent={props => <Customdrawer {...props} />}>
        
        <Drawer.Screen name="Home" component={Home} 
         options={{ drawerIcon: () => <Icon name="home" size={30} color="#900" /> }}/>
        <Drawer.Screen name="Dashboard" component={DashBoard}
        options={{ drawerIcon: () => <Icon name="user" size={30} color="#900" /> }}/>
        <Drawer.Screen name="Setting" component={Profile}
        options={{ drawerIcon: () => <Icon name="gear" size={30} color="#900" /> }}/>
        <Drawer.Screen name="Async Storage Data" component={User}
        options={{ drawerIcon: () => <Icon name="user-secret" size={30} color="#100" /> }}/>
        <Drawer.Screen name="Business" component={Business}
        options={{ title: "BusinessInfo",drawerIcon: () => <Icon name="won" size={30} color="red" /> }}/>
        <Drawer.Screen name="BusinessInfo" component={BusinessForm}
        options={{ title: "Business",drawerIcon: () => <Icon name="won" size={30} color="red" /> }}/>
        
       

      </Drawer.Navigator>
    
  )
}