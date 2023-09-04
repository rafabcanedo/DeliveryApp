import { VStack, View, Text, Pressable, Button, Avatar } from 'native-base';

export default function Profile() {
 return(
 <VStack flex={1} bgColor="#e6e6e6">
  <View mt="10" justifyContent="center" alignItems="center">
  <Avatar
   bg="cyan.500"
   source={{uri: "https://github.com/rafabcanedo.png"}}
   w="100"
   h="100"
   borderWidth="2"
   borderColor="yellow.400"
  >
    RC
  </Avatar>
  </View>
  
  <VStack>

   <VStack>

    <View mt="10">
     <Button borderWidth="2" borderColor="black" bgColor="white" justifyContent="flex-start">
      <Text color="black" fontWeight="medium" fontSize="md" ml="4">
       My Profile
      </Text>
     </Button>
    </View>

    <View mt="8">
     <Button borderWidth="2" borderColor="black" bgColor="white" justifyContent="flex-start">
      <Text color="black" fontWeight="medium" fontSize="md" ml="4">
        My orders
      </Text>
     </Button>
    </View>
   </VStack>

   <View mt="16">
    <Pressable 
     w="full" 
     h="12" 
     bg="danger.600"
     opacity={0.7}
     borderWidth="2"
     borderColor="black"
     alignItems="center"
     justifyContent="center"
     _pressed={{
     bgColor:"danger.700"
     }}
    >
     <Text
      color="white"
      fontFamily="heading"
      fontWeight="bold"
      fontSize="md"
     >
      Logout
     </Text>
    </Pressable>
   </View>
  </VStack>
 </VStack>
 )
}