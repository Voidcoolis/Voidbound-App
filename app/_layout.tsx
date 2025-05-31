import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// this is the first file that is run. The Root Layout
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
        <Stack screenOptions={{headerShown: false}} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
