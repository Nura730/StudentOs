import { View, Text, StyleSheet } from "react-native";

export default function AddTaskScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D1117",
  },
  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "700",
  },
});