export type TaskCategory =
  | "study"
  | "coding"
  | "college"
  | "finance"
  | "personal"
  | "fitness"
  | "editing"
  | "career"
  | "home"
  | "shopping"
  | "other";

export type TaskPriority = "low" | "medium" | "high";

export type TaskStatus =
  | "pending"
  | "completed"
  | "missed"
  | "cancelled";

export type TaskRepeat =
  | "none"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly";

export interface Task {
  id: string;

  title: string;
  description?: string;

  category: TaskCategory;

  priority: TaskPriority;

  status: TaskStatus;

  dueDate: string;
  dueTime?: string;

  reminder?: string;

  repeatType: TaskRepeat;

  isPinned: boolean;

  isArchived: boolean;

  completedAt?: string;

  createdAt: string;
  updatedAt: string;
}