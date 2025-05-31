import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

//! Authentification logic
export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments(); //* gives the segments of the currents screens. If you're in homeScreen, login screen or notifications screnn etc.
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthScreen = segments[0] === "(auth)";

    if (!isSignedIn && !inAuthScreen)
      router.replace(
        "/(auth)/login"
      ); // user navigated to login screen when not signed in or in auth screen
    else if (isSignedIn && inAuthScreen) router.replace("/(tabs)");
  }, [isLoaded, isSignedIn, segments]);

  if (!isLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
