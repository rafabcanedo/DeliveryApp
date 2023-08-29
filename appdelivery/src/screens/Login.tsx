import { VStack, Heading, Center, Pressable, Text } from 'native-base';
import { useNavigation } from "@react-navigation/native";

import { Button } from '../components/Button';
import { Input } from '../components/Input';

export default function Login() {
  const navigation = useNavigation();

 function openRegister() {
  navigation.navigate('register')
  }

 return(
  <VStack className='flex-1 bg-background p-8 items-center justify-center'>
  <Center>
  <Heading className='text-black'>
    Login
  </Heading>

  <Input placeholder="Email" icon="email" marginTop={8} />
  <Input placeholder="Password" icon="lock" marginTop={4} />

  <Button title="Login" marginTop={8} />

  <Pressable marginTop={3} onPress={openRegister}>
   <Text>
    Don't have an account?
    <Text color="#ffc93c"> Register</Text>
   </Text>
  </Pressable>
  </Center>
 </VStack>
 )
}

// 58:26