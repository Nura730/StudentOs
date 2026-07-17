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

export const useTaskStore = create<TaskStore>((set) => {
  const refresh = async () => {
    set({
      tasks: await getAllTasks(),
    });
  };

  return {
    tasks: [],

    loadTasks: refresh,

    addTask: async (task) => {
      await createTask(task);
      await refresh();
    },

    toggleTask: async (id, completed) => {
      await updateTaskStatus(
        id,
        completed ? "completed" : "pending"
      );
      await refresh();
    },

    removeTask: async (id) => {
      await deleteTask(id);
      await refresh();
    },

    editTask: async (task) => {
      await updateTask(task);
      await refresh();
    },
  };
});