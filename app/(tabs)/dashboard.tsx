import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🏠 Dashboard</Text>
      <Text style={styles.text}>Welcome to your main dashboard, Hasan!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0F172A" },
  heading: { fontSize: 26, color: "#fff", fontWeight: "700", marginBottom: 8 },
  text: { color: "#CBD5E1", fontSize: 16 },
});
