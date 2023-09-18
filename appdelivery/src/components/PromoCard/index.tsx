import { Text, View, Pressable, HStack } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export function PromoCard() {
 return (
  <HStack
   bgColor="blueGray.100"
   paddingRight="20" 
   paddingLeft="20" 
   marginTop="-25"
   marginRight="12"
   marginLeft="12"
   borderRadius="lg"
  >

   <View>
    <Text>
     25% Discount Promo
    </Text>
    <Text>
     Get The Promo Code
    </Text>
    <Pressable>
     <Text>
      Click Here
     </Text>
    </Pressable>
   </View>
   <View>
   <MaterialIcons name="fastfood" size={50} color="black" />
   </View>

  </HStack>
 )
}