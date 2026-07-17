import * as repo from "../src/database/repositories/taskRepository";
import { Task } from "../src/types/task";

export const TaskService = {

    getTasks() {
        return repo.getAllTasks();
    },

    create(task: Task) {
        return repo.createTask(task);
    },

    update(task: Task) {
        return repo.updateTask(task);
    },

    delete(id: string) {
        return repo.deleteTask(id);
    },

    toggle(id: string, completed: boolean) {
        return repo.updateTaskStatus(
            id,
            completed ? "completed" : "pending"
        );
    }

};