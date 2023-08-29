import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import Login from '../screens/Login';
import Register from '../screens/Register';

export default function StackRoutes() {
 return (
 <Navigator
   screenOptions={{
    headerShown: false,
   }}
 >

  <Screen 
   name="login"
   component={Login}
  />

  <Screen 
   name="register"
   component={Register}
  />

 </Navigator>
 )
}