import { View, StyleSheet } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

import TaskHeader from "../../src/components/tasks/TaskHeader";
import EmptyTasks from "../../src/components/tasks/EmptyTasks";
import TaskList from "../../src/components/tasks/TaskList";
import FloatingAddButton from "../../src/components/tasks/FloatingAddButton";

import { useTaskStore } from "../../src/store/taskStore";

export default function TasksScreen() {
  const { tasks, loadTasks } = useTaskStore();

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <View style={styles.container}>
      <TaskHeader />

      {tasks.length === 0 ? (
        <EmptyTasks />
      ) : (
        <TaskList tasks={tasks} />
      )}

      <FloatingAddButton
        onPress={() => router.push("/tasks/add")}
      />
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