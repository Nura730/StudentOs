import { View, StyleSheet } from "react-native";
import TaskHeader from "../../src/components/tasks/TaskHeader";

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <TaskHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
});