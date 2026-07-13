// Placeholder data for the Dashboard screen.
// Swap this out for real state (zustand store / SQLite queries) later —
// components below only depend on these shapes, not on where the data comes from.

export type DashboardStats = {
  tasksCompleted: number;
  tasksTotal: number;
  studyMinutesToday: number;
  studyMinutesGoal: number;
  currentStreak: number;
};

export const dummyUser = {
  name: "Nura",
};

export const dummyStats: DashboardStats = {
  tasksCompleted: 3,
  tasksTotal: 7,
  studyMinutesToday: 65,
  studyMinutesGoal: 120,
  currentStreak: 4,
};
