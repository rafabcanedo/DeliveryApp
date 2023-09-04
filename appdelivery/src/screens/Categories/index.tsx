import { HStack, Heading, VStack, View } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { Card } from '../../components/Card';

export default function Categories() {
 return(
 <VStack flex={1} bgColor="#e6e6e6">
 <View flex={1} alignItems="center" justifyContent="center">
  <Heading color="black">
    Categories
  </Heading>

  <VStack space="4">
  <HStack space="4">
   <Card 
    icon={<FontAwesome5 name="hamburger" size={25} color="black" />}
    text="Hambuger"
   />
   <Card 
    icon={<MaterialCommunityIcons name="french-fries" size={25} color="black" />}
    text="Fries"
   />
  </HStack>
  <HStack space="4">
   <Card 
    icon={<MaterialCommunityIcons name="cup" size={25} color="black" />}
    text="Soda"
   />
   <Card 
    icon={<MaterialCommunityIcons name="cupcake" size={25} color="black" />}
    text="Candy"
   />
  </HStack>
  </VStack>
  
 </View>
 </VStack>
 )
}