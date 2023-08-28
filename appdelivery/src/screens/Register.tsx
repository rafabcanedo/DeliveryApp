import { VStack, Heading, Center, Pressable, Text } from 'native-base';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

export default function Register() {
 return(
 <VStack className='flex-1 bg-background p-8'>
  <Center>
  <Heading className='text-black'>
    Register
  </Heading>

  <Input placeholder="Name" icon="user" marginTop={8} />
  <Input placeholder="Email" icon="email" marginTop={4} />
  <Input placeholder="Password" icon="lock" marginTop={4} />
  <Input placeholder="Confirme Password" icon="lock-clock" marginTop={4} />

  <Button title="Register" />

  <Pressable>
   <Text>
    Have already an account?
    <Text>Login</Text>
   </Text>
  </Pressable>
  </Center>
 </VStack>
 )
}