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

      status TEXT NOT NULL,

      dueDate TEXT NOT NULL,
      dueTime TEXT,

      reminder TEXT,

      repeatType TEXT NOT NULL,

      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    );
  `);
}