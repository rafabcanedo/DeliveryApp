import { IButtonProps } from '@/@types';
import { Pressable, Text } from 'react-native'
import { StyledComponent } from "nativewind";

export function Button({title, ...rest}: IButtonProps) {
 return(
  <StyledComponent component={Pressable} {...rest}>
  <Pressable>
    <Text className='text-white font-bold text-md'>
     {title}
    </Text>
  </Pressable>
  </StyledComponent>
 )
}