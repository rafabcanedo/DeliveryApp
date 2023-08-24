import { Link } from "expo-router";
import { Text, View, Button } from "react-native";

export default function Home() {
 return(
  <View className="flex-1 items-center justify-center bg-background">
   <Text className="text-3xl text-primary">
    Home
   </Text>

   <Link href="/login/login" asChild>
    <Button title="Login" />
   </Link>

   <Link href="/register/register" asChild>
    <Button title="Register" />
   </Link>

  </View>
 )
}