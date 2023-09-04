import { View, StatusBar, HStack, Text, Box } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export function Header() {
 return (
  <View>
  <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
   <Box safeAreaTop bg="#f8da5b" />
  <HStack bg="violet.800" px="4" py="3" justifyContent="space-between" alignItems="center" w="full">
  <HStack alignItems="center">
   <Text color="white" fontSize="20" fontWeight="bold">
    User
   </Text>
  </HStack>
  <HStack>
    <MaterialIcons name="logout" size={24} color="white" />
  </HStack>
  </HStack>
  </View>
 )
}