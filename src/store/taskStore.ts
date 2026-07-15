import { create } from "zustand";
import { Task } from "../types/task";
import {
  createTask,
  getAllTasks,
} from "../database/repositories/taskRepository";

interface TaskStore {
  tasks: Task[];

  loadTasks: () => Promise<void>;

  addTask: (task: Task) => Promise<void>;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  loadTasks: async () => {
    const tasks = await getAllTasks();

    set({ tasks });
  },

  addTask: async (task) => {
    await createTask(task);

    const tasks = await getAllTasks();

    set({ tasks });
  },
}));