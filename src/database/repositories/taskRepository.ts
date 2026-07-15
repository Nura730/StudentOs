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
export async function updateTaskStatus(
  id: string,
  status: "pending" | "completed"
) {
  const db = await getDatabase();

  await db.runAsync(
    `UPDATE tasks
     SET status = ?, updatedAt = ?
     WHERE id = ?`,
    [status, new Date().toISOString(), id]
  );
}

export async function updateTask(task: Task) {
  const db = await getDatabase();

  await db.runAsync(
    `UPDATE tasks
     SET
      title=?,
      description=?,
      category=?,
      priority=?,
      reminder=?,
      repeatType=?,
      updatedAt=?
     WHERE id=?`,
    [
      task.title,
      task.description ?? null,
      task.category,
      task.priority,
      task.reminder ?? null,
      task.repeatType,
      new Date().toISOString(),
      task.id,
    ]
  );
}

export async function deleteTask(id: string) {
  const db = await getDatabase();

  await db.runAsync(
    `DELETE FROM tasks WHERE id=?`,
    [id]
  );
}

export async function getTaskById(id: string): Promise<Task | null> {
  const db = await getDatabase();

  const task = await db.getFirstAsync<Task>(
    `SELECT * FROM tasks WHERE id=?`,
    [id]
  );

  return task ?? null;
}