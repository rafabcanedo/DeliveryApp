import { IInputProps } from "@/@types"
import { styled } from "nativewind";
import { TextInput, View } from "react-native";

export function Input() {
 return (
  <View>
  <TextInput 
   className="h-10 w-full mb-1 bg-gray-400 focus:bg-stone-100 focus:border-yellow-500 font-semibold text-lg"
  />
  </View>
 )
}