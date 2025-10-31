import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import '../global.css';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4F46E5",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: {
          backgroundColor: "#111827",
          borderTopColor: "#1F2937",
          height: Platform.OS === "ios" ? 70 : 50,
          paddingBottom: Platform.OS === "ios" ? 25 : 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
        animation: "shift",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Login"
        options={{
          title: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="login" size={24} color={color} />
          ),
        }}
      />

      {/* 🧾 Signup Tab */}
      <Tabs.Screen
        name="Signup"
        options={{
          title: "Signup",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-add-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
