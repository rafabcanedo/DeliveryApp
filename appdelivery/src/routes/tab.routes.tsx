import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';

import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
 return (
  <Tab.Navigator screenOptions={{ 
    headerShown: false,
    tabBarActiveTintColor: '#ffc60b',
    tabBarInactiveTintColor: '#b7b7b7',
    }}>

   <Tab.Screen 
    name="home"
    component={Home}
    options={{
     tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
     tabBarLabel: 'Home'
    }}
   />

   <Tab.Screen 
    name="categories"
    component={Categories}
    options={{
     tabBarIcon: ({ color, size }) => <MaterialIcons name="lunch-dining" size={size} color={color} />,
     tabBarLabel: 'Categories'
    }}
   />

   <Tab.Screen 
    name="cart"
    component={Cart}
    options={{
     tabBarIcon: ({ color, size }) => <MaterialIcons name="shopping-cart" size={size} color={color} />,
     tabBarLabel: 'Cart'
    }}
   />

   <Tab.Screen 
    name="profile"
    component={Profile}
    options={{
     tabBarIcon: ({ color, size }) => <MaterialIcons name="person" size={size} color={color} />,
     tabBarLabel: 'Profile'
    }}
   />

  </Tab.Navigator>
 )
}