import { useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import * as Crypto from "expo-crypto";
import React from "react";
import {
  createTask,
  getAllTasks,
  deleteAllTasks,
} from "../../src/database/repositories/taskRepository";

import { Task } from "../../src/types/task";

export default function Home() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await getAllTasks();
    setTasks(data);
  }

  async function addTask() {
    await createTask({
      id: Crypto.randomUUID(),
      title: `Task ${tasks.length + 1}`,
      description: "",
      category: "study",
      priority: "medium",
      status: "pending",
      dueDate: new Date().toISOString(),
      reminder: "",
      repeatType: "none",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    loadTasks();
  }

  async function clearTasks() {
    await deleteAllTasks();
    loadTasks();
  }

  return (
    <View style={styles.container}>
      <Button title="Add Task" onPress={addTask} />

      <Button title="Clear Tasks" onPress={clearTasks} />

      <FlatList
        style={{ marginTop: 20 }}
        data={tasks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet 🚀</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>

            <Text>{item.priority}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  empty: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 16,
  },
});