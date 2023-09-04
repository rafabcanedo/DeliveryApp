import { Button, Text, View } from "native-base";
import { CardProps } from "../../@types";

export function Card({icon, text }: CardProps) {
 return (
  <View>
    <View>
    <Button
     w="120"
     h="90"
     bg="white"
     rounded="md"
     _pressed={{
     bgColor: "gray.100"
     }}
    >
    <Text
     fontSize="md"
     fontWeight="medium"
    >
     {icon}
    </Text>
    </Button>
    <View alignItems="center" mt="1">
    <Text fontSize="md" fontWeight="semibold">
     {text}
    </Text>
    </View>
    </View>
  </View>
 )
}