import { VStack, Text, Heading, Pressable } from 'native-base';
import { useNavigation } from "@react-navigation/native";

export default function Cart() {
  const navigation = useNavigation();

  function goShop () {
   navigation.navigate('home')
  }

 return(
 <VStack flex={1} alignItems="center" justifyContent="center" bgColor="#e6e6e6">
  <Heading color="black">
    Your Cart is empty
  </Heading>

  <Pressable 
   h={6}
   w={24}
   bgColor="blue.900"
   mt={4}
   borderRadius={6}
   onPress={goShop}
  >
    <Text size="lg" color="#ffc93c">
      Go to Shop
    </Text>
  </Pressable>

 </VStack>
 )
}