import { Text, View, Pressable } from "native-base";

export function Popular() {
 return (
  <View>
  <Text
   fontWeight="semibold"
   underline
  >
    Popular Now
  </Text>

  <View>
   <View px="3" pt="6">
   <Pressable
    bg="gray.300"
    w="full"
    h="70"
    rounded="2xl"
    justifyContent="center"
    alignItems="center"
    _pressed={{
     opacity: "0.7"
    }}
   >
    <Text>Hambuger One</Text>
   </Pressable>
   </View>
   <View px="3" pt="3">
   <Pressable
    bg="gray.300"
    w="full"
    h="70"
    rounded="2xl"
    justifyContent="center"
    alignItems="center"
    _pressed={{
    opacity: "0.7"
   }}
   >
    <Text>Hambuger Two</Text>
   </Pressable>
   </View>
   <View px="3" pt="3">
   <Pressable
    bg="gray.300"
    w="full"
    h="70"
    rounded="2xl"
    justifyContent="center"
    alignItems="center"
    _pressed={{
     opacity: "0.7"
    }}
   >
    <Text>Hambuger Three</Text>
   </Pressable>
   </View>
  </View>
  </View>
 )
}