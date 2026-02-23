import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./Home";

export default function Index() {
  return (
    <SafeAreaView style={{flex:1}} >
      <Home/>
    </SafeAreaView>
  );
}
