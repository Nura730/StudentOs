import { View, Text, StyleSheet } from "react-native";

export default function TaskHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>

      <Text style={styles.subtitle}>
        Organize your day and never miss important work.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: "#8B949E",
  },
});