import { VStack, Heading, Center, Pressable, Text } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SignInDataProps } from '../../@types';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

const signInSchema = yup.object({
  email: yup.string().required('Please enter your email').email('Please enter a valid email'),
  password: yup.string().required('Please enter an password').min(6, 'The password must contain at min 6 caracters'),
})

export default function Login() {
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm<SignInDataProps>({
    resolver: yupResolver(signInSchema)
   });

 function openRegister() {
  navigation.navigate('register')
  }

  const handleSignUp = (data: SignInDataProps) => {
    console.log(data)
  }

 return(
  <VStack className='flex-1 bg-background p-8'>
  <Center>
  <Heading className='text-black'>
    Login
  </Heading>

  <Controller 
   control={control}
   name="email"
   render={({ field: { onChange } }) => (
    <Input 
     placeholder="Email" 
     icon="email" 
     marginTop={8}
     onChangeText={onChange}
     errorMessage={errors.email?.message}
    />
   )}
  />

<Controller 
   control={control}
   name="password"
   render={({ field: { onChange } }) => (
    <Input 
     placeholder="Password"
     secureTextEntry
     icon="lock" 
     marginTop={4}
     onChangeText={onChange}
     errorMessage={errors.password?.message}
    />
   )}
  />

  <Button title="Login" marginTop={8} onPress={handleSubmit(handleSignUp)} />

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