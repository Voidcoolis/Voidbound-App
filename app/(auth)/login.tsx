import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/auth.styles";
import { useSSO } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function login() {
const {startSSOFlow} = useSSO();
const router = useRouter(); // allows us to do navigation manually

  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy: "oauth_google" }); // from clerk documentation
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace("/(tabs)"); // replaces current home screen with tabs
      }
    } catch (error) {
     console.error("OAuth error:", error); 
    }
  };

  return (
    <View style={styles.container}>
      {/* BRAND SECTION */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="planet" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>Voidbound</Text>
        <Text style={styles.tagline}>Post. Explore. Get Voidbound</Text>
      </View>

      {/*
      ILLUSTRATIONS
// Image : https://storyset.com/illustration/social-life/bro
// you can change the color of the image in the website before you download it

      */}
      <View style={styles.illustrationContainer}>
      <Image
        source={require("../../assets/images/Social-life.png")}
        style={styles.illustration}
        resizeMode="cover"
      />
      </View>

      {/* LOGIN SECTION */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </View>
  );
}
