import { View, Text, TextInput } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useForm } from 'react-hook-form'
import { AntDesign, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Register() {
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [loading, setLoading] = useState(false);

 const { control } = useForm();
 return (
  <View className="flex-1 items-center justify-center bg-background p-8">
   <Text>Create Account</Text>
    
   <View className="gap-6 mb-8">
   <View className="flex-row gap-2 items-center">
   <AntDesign name="user" size={24} color="#ffc93c" />
   <TextInput className="w-80 h-10 bg-gray-300 rounded-md px-4 text-black focus:border-2 focus:border-primary" placeholder="Seu Nome" onChangeText={setName} />
   </View>

   <View className="flex-row gap-2 items-center">
   <MaterialCommunityIcons name="email-outline" size={24} color="#ffc93c" />
   <TextInput className="w-80 h-10 bg-gray-300 rounded-md px-4 text-black focus:border-2 focus:border-primary" placeholder="Seu Email" />
   </View>

   <View className="flex-row gap-2 items-center">
   <AntDesign name="lock" size={24} color="#ffc93c" />
   <TextInput className="w-80 h-10 bg-gray-300 rounded-md px-4 text-black focus:border-2 focus:border-primary" placeholder="Sua Senha" />
   </View>

   <View className="flex-row gap-2 items-center">
   <Ionicons name="key-outline" size={24} color="#ffc93c" />
   <TextInput className="w-80 h-10 bg-gray-300 rounded-md px-4 text-black focus:border-2 focus:border-primary" placeholder="Confirme a sua Senha" />
   </View>
   </View>

   <Button 
    className="w-full h-10 bg-primary hover:bg-hover items-center justify-center rounded-lg"
    title="Register"
   />
  </View>
 )
}