import { Button as ButtonNativeBase, Text } from 'native-base';
import { IBtnProps } from "../../@types";

export function Button({ title, ...rest }: IBtnProps) {
 return (
  <ButtonNativeBase
   w="100%"
   h={12}
   borderRadius={10}
   bg="#ffc93c"
   _pressed={{
    bgColor: "#e6b137"
   }}
   {...rest}
  >
    <Text
     color="white"
     fontSize="lg"
     fontWeight="medium"
     fontFamily="heading"
    >
     {title}
    </Text>
  </ButtonNativeBase>
 )
}

// export function Button({ title }: IButtonProps) {
//  return(
//   <Pressable style={styles.ContainerButton}>
//    <Text style={styles.TextButton}>
//      {title}
//    </Text>
//   </Pressable>
//  )
// }