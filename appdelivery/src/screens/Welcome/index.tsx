import { Text, VStack, Image, View, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

export default function Welcome() {
 const navigation = useNavigation();

 function goToMedium() {
  navigation.navigate('medium')
 }

 return (
  <VStack flex={1} bgColor="#e6e6e6" justifyContent="center">
   <View alignItems="center" justifyContent="center">
    <Image
     size="2xl"
     source={require('../../../assets/home.png')}
     alt="Image Logo"
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

    <View w="full" h="20" alignItems="flex-end" justifyContent="center" mt="16">
    <Pressable w="16" h="16" bgColor="#ffc93c" rounded="full" alignItems="center" justifyContent="center" mr="8" onPress={goToMedium}>
    <AntDesign name="arrowright" size={24} color="white" />
    </Pressable>
    </View>
  </VStack>
 )
}