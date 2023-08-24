import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "@/components/Button";

export default function Categories() {
 return(
  <View className="flex-1 items-center justify-center bg-background">
   <Text className="text-3xl text-primary">
    Categories
   </Text>

   <Link href="/profile" asChild>
   </Link>

   <Button />
  </View>
 )
}