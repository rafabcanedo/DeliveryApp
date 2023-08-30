import { Text, Pressable } from "native-base";
import { IBtnProps } from "../../@types";

export function MediumBtn({  title, ...rest }: IBtnProps) {
 return (
   <Pressable
    w="300"
    h="50"
    rounded="lg"
    borderWidth="2"
    borderColor="#ffc93c"
    justifyContent= "center"
    alignItems= "center"
    {...rest}
   >
    <Text>{title}</Text>
   </Pressable>
 )
}