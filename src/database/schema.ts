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

      dueDate TEXT,
      dueTime TEXT,

      reminder TEXT,

      repeatType TEXT NOT NULL,

      isArchived INTEGER DEFAULT 0,

      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS notes (
      id TEXT PRIMARY KEY,
      title TEXT,
      content TEXT,
      folder TEXT,
      color TEXT,
      createdAt TEXT,
      updatedAt TEXT
    );

    CREATE TABLE IF NOT EXISTS expenses (
      id TEXT PRIMARY KEY,
      title TEXT,
      amount REAL,
      type TEXT,
      category TEXT,
      paymentMethod TEXT,
      note TEXT,
      date TEXT,
      createdAt TEXT
    );

    CREATE TABLE IF NOT EXISTS goals (
      id TEXT PRIMARY KEY,
      title TEXT,
      target INTEGER,
      current INTEGER,
      deadline TEXT,
      completed INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS habits (
      id TEXT PRIMARY KEY,
      title TEXT,
      frequency TEXT,
      currentStreak INTEGER,
      bestStreak INTEGER,
      lastCompleted TEXT
    );

    CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY,
      name TEXT,
      icon TEXT,
      color TEXT
    );

    CREATE TABLE IF NOT EXISTS passwords (
      id TEXT PRIMARY KEY,
      title TEXT,
      username TEXT,
      password TEXT,
      website TEXT,
      notes TEXT
    );
  `);
}