import { VStack, Text, Heading, Pressable, View } from 'native-base';
import { useNavigation } from "@react-navigation/native";

export default function Cart() {
  const navigation = useNavigation();

  function goShop () {
   navigation.navigate('home')
  }

 return(
 <VStack flex={1} bgColor="#e6e6e6">
  <View flex={1} alignItems="center" justifyContent="center">
  <Heading color="black">
    Your Cart is empty
  </Heading>

  <Pressable
   w="200"
   h="10"
   bgColor="yellow.200"
   mt={4}
   borderRadius={6}
   onPress={goShop}
   alignItems="center"
   justifyContent="center"
  >
    <Text color="darkBlue.400" fontWeight="medium" fontSize="lg">
      Go to Shop
    </Text>
  </Pressable>
  </View>

 </VStack>
 )
}