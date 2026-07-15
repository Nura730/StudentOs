import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { colors, radius, spacing, shadows } from "../../theme";

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
}

export default function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    ...shadows.md,
  },
});