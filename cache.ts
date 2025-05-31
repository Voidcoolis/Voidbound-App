import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

// 👇 Manually define TokenCache type compatible with what Clerk expects
type TokenCache = {
  getToken: (key: string) => Promise<string | null>;
  saveToken: (key: string, token: string) => Promise<void>;
};

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await SecureStore.getItemAsync(key);
        if (item) {
          console.log(`${key} was used 🔐 \n`);
        } else {
          console.log("No values stored under key: " + key);
        }
        return item;
      } catch (error) {
        console.error("SecureStore get item error: ", error);
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    saveToken: (key: string, token: string) => {
      return SecureStore.setItemAsync(key, token);
    },
  };
};

// SecureStore is not supported on the web
export const tokenCache = Platform.OS !== "web" ? createTokenCache() : undefined;
