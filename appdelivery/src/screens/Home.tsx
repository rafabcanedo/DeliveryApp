import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation()

  const handlePageRegister = () => {
   navigation.navigate("Register")
  }

 return(
 <View className='flex-1 bg-background items-center justify-center'>
  <Text className='text-black text-base'>
    Home
  </Text>

  <Pressable onPress={handlePageRegister}>Register</Pressable>
 </View>
 )
}