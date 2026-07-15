import { getDatabase } from "../database";
import { Task } from "../../types/task";

export async function createTask(task: Task) {
  const db = await getDatabase();

  await db.runAsync(
    `INSERT INTO tasks
    (
      id,
      title,
      description,
      category,
      priority,
      status,
      dueDate,
      dueTime,
      reminder,
      repeatType,
      createdAt,
      updatedAt
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      task.id,
      task.title,
      task.description ?? null,
      task.category,
      task.priority,
      task.status,
      task.dueDate,
      task.dueTime ?? null,
      task.reminder ?? null,
      task.repeatType,
      task.createdAt,
      task.updatedAt,
    ],
  );
}

export async function getAllTasks(): Promise<Task[]> {
  const db = await getDatabase();

  return await db.getAllAsync<Task>(`SELECT * FROM tasks ORDER BY dueDate ASC`);
}

export async function deleteAllTasks() {
  const db = await getDatabase();

  await db.runAsync("DELETE FROM tasks");
}
