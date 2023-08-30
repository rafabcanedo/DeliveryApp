import { Text, VStack, Image, View, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { MediumBtn } from "../../components/MediumBtn";

export default function Medium() {
 const navigation = useNavigation();

 function goToLogin() {
  navigation.navigate('login')
 }

 function goToRegister() {
  navigation.navigate('register')
 }

 return(
 <VStack flex={1} bgColor="#e6e6e6">
  <View alignItems="center" justifyContent="center">
    <Image
     size="2xl"
     source={require('../../../assets/medium.png')}
     alt="Image Medium"
    />
    <VStack>
    <Text fontFamily="heading" fontSize="2xl" fontWeight="bold">
     Welcome To
    </Text>
    <Text fontFamily="heading" fontSize="4xl" fontWeight="extrabold">
     AppDelivery
    </Text>
    </VStack>
    </View>

    <VStack alignItems="center" justifyContent="center" mt="8">
     <MediumBtn title="Login" onPress={goToLogin}/>
     <Text fontSize="lg" mt="2" mb="2">or</Text>
     <MediumBtn title="Register" onPress={goToRegister} />
    </VStack>
 </VStack>
 )
}