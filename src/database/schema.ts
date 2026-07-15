import { getDatabase } from "./database";

export async function initializeDatabase() {
  const db = await getDatabase();

  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY NOT NULL,

      title TEXT NOT NULL,
      description TEXT,

      category TEXT NOT NULL,
      priority TEXT NOT NULL,

      repeatType TEXT NOT NULL,

      reminder TEXT,

      isArchived INTEGER DEFAULT 0,

      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS task_instances (
      id TEXT PRIMARY KEY NOT NULL,

      taskId TEXT NOT NULL,

      taskDate TEXT NOT NULL,

      status TEXT NOT NULL,

      completedAt TEXT,

      FOREIGN KEY(taskId) REFERENCES tasks(id)
    );
  `);
}