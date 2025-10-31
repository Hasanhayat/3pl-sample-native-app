import { router } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#94A3B8" />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor="#94A3B8" />
      <Button title="Login" color="#4F46E5" onPress={() =>{ alert("Logged In")
        router.replace("/dashboard")
       }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#0F172A" },
  heading: { color: "#fff", fontSize: 24, fontWeight: "700", marginBottom: 20, textAlign: "center" },
  input: { backgroundColor: "#1E293B", color: "#fff", padding: 12, borderRadius: 8, marginBottom: 15 },
});
