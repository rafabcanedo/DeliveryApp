import { Button } from "../../components/Button/index";
import { Text, View } from "react-native";

export default function Login() {
 return (
  <View className="flex-1 items-center justify-center bg-background">
    <Text className="text-3xl text-primary">Login Screen</Text>

    <Button 
     className="w-full h-10 bg-primary hover:bg-hover items-center justify-center rounded-lg"
     title="Login"
    />
  </View>
 )
}