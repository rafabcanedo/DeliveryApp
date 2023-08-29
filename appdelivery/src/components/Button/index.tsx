import { useState } from 'react';
import { Button as ButtonNativeBase, Spinner, Text } from 'native-base';
import { IBtnProps } from "../../@types";

export function Button({ title, ...rest }: IBtnProps) {

  const [loading, setLoading] = useState(false)

 return (
  <ButtonNativeBase
   w="100%"
   h={12}
   borderRadius={10}
   bg="#ffc93c"
   _pressed={{
    bgColor: "#e6b137"
   }}
   onPress={() => setLoading(!loading)}
   {...rest}
  >
    {!loading ? (
    <Text
     color="white"
     fontSize="lg"
     fontWeight="medium"
     fontFamily="heading"
    >
     {title}
    </Text>
     ) : (
    <Spinner color="emerald.500" size="sm" />
     )}
  </ButtonNativeBase>
 )
}