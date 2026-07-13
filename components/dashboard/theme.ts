// Shared style tokens for the Dashboard screen.
// Keeps colors consistent across GreetingHeader, ProgressCard, FloatingAddButton, etc.
// True black (#000) is used for the base background to take advantage of AMOLED
// per-pixel power savings; surfaces sit one or two steps above it.

export const dashboardTheme = {
  colors: {
    background: "#000000",
    surface: "#0D0D0D",
    surfaceElevated: "#141414",
    border: "#1F1F1F",
    accent: "#00E5FF",
    accentMuted: "#00E5FF33",
    textPrimary: "#FFFFFF",
    textSecondary: "#9A9A9A",
    textTertiary: "#5C5C5C",
    success: "#3DDC97",
    warning: "#FFB020",
  },
  radius: {
    sm: 10,
    md: 16,
    lg: 24,
    pill: 999,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
} as const;
