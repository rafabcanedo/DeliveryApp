import { Icon, Input as NativeBaseInput } from 'native-base';
import { IInpProps } from '../../@types';
import { MaterialIcons } from '@expo/vector-icons';

export function Input({ icon, ...rest }: IInpProps) {
 return (
  <NativeBaseInput 
   InputLeftElement={<Icon as={MaterialIcons} name={icon} size="lg" marginLeft={4} color="gray.500" />}
   bgColor="gray.300"
   fontSize="md"
   h={12}
   mb={4}
   _focus={{
    bgColor: "gray.200",
    borderWidth: 1,
    borderColor: "#ffc93c"
   }}
   {...rest}
  />
 )
}