import { Icon, Input as NativeBaseInput, FormControl } from 'native-base';
import { IInpProps } from '../../@types';
import { MaterialIcons } from '@expo/vector-icons';

type Props = IInpProps & {
 errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, icon, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;
 return (
  <FormControl mb={4} isInvalid={invalid}>
  <NativeBaseInput 
   InputLeftElement={<Icon as={MaterialIcons} name={icon} size="lg" marginLeft={4} color="gray.500" />}
   bgColor="gray.300"
   fontSize="md"
   h={12}
   mb={4}
   isInvalid={invalid}
   _focus={{
    bgColor: "gray.200",
    borderWidth: 1,
    borderColor: "#ffc93c"
   }}
   _invalid={{
    borderWidth: 2,
    borderColor: "red.500"
   }}
   {...rest}
  />
  <FormControl.ErrorMessage>
    {errorMessage}
  </FormControl.ErrorMessage>
  </FormControl>
 )
}