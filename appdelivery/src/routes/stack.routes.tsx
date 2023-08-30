import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import Welcome from '../screens/Welcome';
import Medium from '../screens/Medium';
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
   name="welcome"
   component={Welcome}
  />

  <Screen 
   name="medium"
   component={Medium}
  />

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