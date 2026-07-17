export type TaskCategory =
  | "study"
  | "coding"
  | "college"
  | "finance"
  | "personal"
  | "fitness"
  | "editing"
  | "career"
  | "other";

export type TaskPriority = "low" | "medium" | "high";

export type TaskStatus = "pending" | "completed";

export type TaskRepeat =
  | "none"
  | "daily"
  | "weekly"
  | "monthly";

export interface Task {
    id: string;

    title: string;
    description?: string;

    category: string;

    priority: "low" | "medium" | "high";

    status: "pending" | "completed";

    dueDate: string;
    dueTime?: string;

    reminder?: string;

    repeatType:
        | "none"
        | "daily"
        | "weekly"
        | "monthly";

    createdAt: string;
    updatedAt: string;
}