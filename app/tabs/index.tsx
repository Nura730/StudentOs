import { View, Button } from "react-native";
import { useEffect } from "react";
import * as Crypto from "expo-crypto";

import {
  createTask,
  getAllTasks,
} from "../../src/database/repositories/taskRepository";

export default function Home() {
  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const tasks = await getAllTasks();

    console.log(tasks);
  }

  async function addSampleTask() {
    await createTask({
      id: Crypto.randomUUID(),

      title: "Learn Expo SQLite",

      description: "StudentOS development",

      category: "coding",

      priority: "high",

      status: "pending",

      dueDate: new Date().toISOString(),

      repeatType: "none",

      createdAt: new Date().toISOString(),

      updatedAt: new Date().toISOString(),
    });

    loadTasks();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Button title="Add Sample Task" onPress={addSampleTask} />
    </View>
  );
}
