export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 9999,
} as const;

export type Radius = keyof typeof radius;