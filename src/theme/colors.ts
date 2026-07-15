export const colors = {
  light: {
    primary: "#4F46E5",
    secondary: "#7C3AED",

    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",

    background: "#F8FAFC",
    surface: "#FFFFFF",

    text: "#0F172A",
    textSecondary: "#64748B",

    border: "#E2E8F0",
  },

  dark: {
    primary: "#6366F1",
    secondary: "#8B5CF6",

    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",

    background: "#0F172A",
    surface: "#1E293B",

    text: "#F8FAFC",
    textSecondary: "#94A3B8",

    border: "#334155",
  },
};

export type ThemeMode = keyof typeof colors;