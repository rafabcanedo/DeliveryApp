import { NativeBaseProvider } from "native-base";
import Routes from "./src/routes";
import Login from "./src/screens/Login";

export default function App() {
  return (
   <NativeBaseProvider>
   <Login />
   </NativeBaseProvider>
  );
}
