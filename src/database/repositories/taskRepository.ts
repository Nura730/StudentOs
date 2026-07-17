import { getDatabase } from "../database";
import { Task } from "../../types/task";

export async function createTask(task: Task) {
  const db = await getDatabase();

  await db.runAsync(
    `
    INSERT INTO tasks (
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
      isArchived,
      createdAt,
      updatedAt
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      task.id,
      task.title,
      task.description ?? "",
      task.category,
      task.priority,
      task.status,
      task.dueDate,
      task.dueTime ?? "",
      task.reminder ?? "",
      task.repeatType,
      task.isArchived ? 1 : 0,
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
  status: "pending" | "completed",
) {
  const db = await getDatabase();

  await db.runAsync(
    `UPDATE tasks
     SET status = ?, updatedAt = ?
     WHERE id = ?`,
    [status, new Date().toISOString(), id],
  );
}

export async function updateTask(task: Task) {
  const db = await getDatabase();

  await db.runAsync(
    `
    UPDATE tasks
    SET
      title = ?,
      description = ?,
      category = ?,
      priority = ?,
      status = ?,
      dueDate = ?,
      dueTime = ?,
      reminder = ?,
      repeatType = ?,
      isArchived = ?,
      updatedAt = ?
    WHERE id = ?
    `,
    [
      task.title,
      task.description ?? "",
      task.category,
      task.priority,
      task.status,
      task.dueDate,
      task.dueTime ?? "",
      task.reminder ?? "",
      task.repeatType,
      task.isArchived ? 1 : 0,
      new Date().toISOString(),
      task.id,
    ],
  );
}

export async function deleteTask(id: string) {
  const db = await getDatabase();

  await db.runAsync(`DELETE FROM tasks WHERE id=?`, [id]);
}

export async function getTaskById(id: string): Promise<Task | null> {
  const db = await getDatabase();

  const task = await db.getFirstAsync<Task>(`SELECT * FROM tasks WHERE id=?`, [
    id,
  ]);

  return task ?? null;
}

export async function archiveTask(id: string) {
  const db = await getDatabase();

  await db.runAsync(
    `
    UPDATE tasks
    SET isArchived = 1
    WHERE id = ?
    `,
    [id],
  );
}

export async function getPendingTasks(): Promise<Task[]> {
  const db = await getDatabase();

  return await db.getAllAsync<Task>(
    `
    SELECT *
    FROM tasks
    WHERE status='pending'
      AND isArchived=0
    ORDER BY dueDate ASC, dueTime ASC
    `,
  );
}

export async function getCompletedTasks(): Promise<Task[]> {
  const db = await getDatabase();

  return await db.getAllAsync<Task>(
    `
    SELECT *
    FROM tasks
    WHERE status='completed'
    ORDER BY updatedAt DESC
    `,
  );
}
