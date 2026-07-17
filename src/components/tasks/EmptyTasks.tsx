import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EmptyTasks() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="clipboard-outline"
        size={80}
        color="#3A3F47"
      />

      <Text style={styles.title}>No Tasks Yet</Text>

      <Text style={styles.subtitle}>
        Tap the + button to create your first task.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  title: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 15,
    color: "#8B949E",
    textAlign: "center",
    lineHeight: 22,
  },
});