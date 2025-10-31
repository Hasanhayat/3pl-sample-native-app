import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import './global.css';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      const token = null
      if (!token) {
        router.replace("/login");
      }
      setLoading(false);
    };
    checkLogin();
  }, []);

  // if (loading) {
  //   return (
  //     <View className="flex-1 items-center justify-center bg-white">
  //       <ActivityIndicator size="large" color="#0ea5e9" />
  //     </View>
  //   );
  // }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* 👇 Navigation Stack */}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
          gestureEnabled: true,
        }}
      >
        {/* 🧭 Main Tabs (Home, Login, Signup, etc.) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" />


        {/* Example modal screen — you can enable later if needed */}
        {/* <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            title: "Modal",
          }}
        /> */}
      </Stack>

      {/* ✅ StatusBar auto theme */}
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}
