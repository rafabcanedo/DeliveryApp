import { VStack, Heading, Center, Pressable, Text } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormDataProps } from '../../@types';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

const signUpSchema = yup.object({
 name: yup.string().required('Please enter your name'),
 email: yup.string().required('Please enter your email').email('Please enter a valid email'),
 password: yup.string().required('Please enter an password').min(6, 'The password must contain at min 6 caracters'),
 password_confirm: yup
 .string()
 .required('Please confirm your password')
 .oneOf([yup.ref('password'), null], 'Confirm password does not match')
})

export default function Register() {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
   resolver: yupResolver(signUpSchema)
  });

  function openLogin() {
   navigation.navigate('login')
  }

  const handleSignUp = (data: FormDataProps) => {
    console.log(data)
  }

 return(
 <VStack className='flex-1 bg-background p-8'>
  <Center>
  <Heading className='text-black'>
    Register
  </Heading>

  <Controller 
   control={control}
   name="name"
   render={({ field: { onChange } }) => (
    <Input 
     placeholder="Name" 
     icon="person" 
     marginTop={8} 
     onChangeText={onChange} 
     errorMessage={errors.name?.message}
    />
   )}
  />

  <Controller 
   control={control}
   name="email"
   render={({ field: { onChange } }) => (
    <Input 
     placeholder="Email" 
     icon="email" 
     marginTop={4} 
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

  <Controller 
   control={control}
   name="password_confirm"
   render={({ field: { onChange } }) => (
    <Input 
     placeholder="Confirm your Password" 
     secureTextEntry 
     icon="lock-clock" 
     marginTop={4} 
     onChangeText={onChange} 
     errorMessage={errors.password_confirm?.message} 
    />
   )}
  />

  <Button title="Register" onPress={handleSubmit(handleSignUp)} />

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