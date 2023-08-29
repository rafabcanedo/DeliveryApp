import { VStack, Heading, Center, Pressable, Text } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

export default function Register() {
  const navigation = useNavigation();
  // const { control } = useForm();

  function openLogin() {
   navigation.navigate('login')
  }

 return(
 <VStack className='flex-1 bg-background p-8'>
  <Center>
  <Heading className='text-black'>
    Register
  </Heading>

  <Input placeholder="Name" icon="person" marginTop={8} />
  <Input placeholder="Email" icon="email" marginTop={4} />
  <Input placeholder="Password" icon="lock" marginTop={4} />
  <Input placeholder="Confirm your Password" icon="lock-clock" marginTop={4} />

  <Button title="Register" />

  <Pressable marginTop={3} onPress={openLogin}>
   <Text>
    Have already an account?
    <Text color="#ffc93c"> Login</Text>
   </Text>
  </Pressable>
  </Center>
 </VStack>
 )
}