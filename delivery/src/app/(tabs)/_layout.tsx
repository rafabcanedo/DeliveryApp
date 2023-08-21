import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabRoutesLayout() {
 return (
  <Tabs screenOptions={{ 
    headerShown: false,
    tabBarActiveTintColor: '#ffc60b',
    tabBarInactiveTintColor: '#b7b7b7',
    }}>
    <Tabs.Screen 
     name="index"
     options={{
      title: "Home",
      tabBarIcon: ({ size, color }) => (
        <MaterialIcons name="home" size={size} color={color} />
      )
     }}
     />
     <Tabs.Screen 
     name="profile"
     options={{
      title: "Profile",
      tabBarIcon: ({ size, color }) => (
        <MaterialIcons name="person" size={size} color={color} />
      )
     }}
     />
     <Tabs.Screen 
      name="categories"
      options={{
        title: "Categories",
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="lunch-dining" size={size} color={color} />
        )
       }}
     />

  </Tabs>
 )
}