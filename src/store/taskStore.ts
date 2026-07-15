import { create } from "zustand";
import { Task } from "../types/task";

import {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
  updateTaskStatus,
} from "../database/repositories/taskRepository";

interface TaskStore {
  tasks: Task[];

  loadTasks(): Promise<void>;

  addTask(task: Task): Promise<void>;

  toggleTask(id: string, completed: boolean): Promise<void>;

  removeTask(id: string): Promise<void>;

  editTask(task: Task): Promise<void>;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  loadTasks: async () => {
    set({
      tasks: await getAllTasks(),
    });
  },

  addTask: async (task) => {
    await createTask(task);

    set({
      tasks: await getAllTasks(),
    });
  },

  toggleTask: async (id, completed) => {
    await updateTaskStatus(
      id,
      completed ? "completed" : "pending"
    );

    set({
      tasks: await getAllTasks(),
    });
  },

  removeTask: async (id) => {
    await deleteTask(id);

    set({
      tasks: await getAllTasks(),
    });
  },

  editTask: async (task) => {
    await updateTask(task);

    set({
      tasks: await getAllTasks(),
    });
  },
}));