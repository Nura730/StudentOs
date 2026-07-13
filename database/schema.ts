export type ItemType =
  | "task"
  | "habit"
  | "call"
  | "message"
  | "finance"
  | "leetcode"
  | "youtube"
  | "college"
  | "personal"
  | "custom";

export interface Item {
  id: string;

  title: string;
  description?: string;

  type: ItemType;

  priority: "low" | "medium" | "high";

  completed: boolean;

  date: string;

  time?: string;

  repeat:
    | "none"
    | "daily"
    | "weekly"
    | "monthly";

  createdAt: string;
}