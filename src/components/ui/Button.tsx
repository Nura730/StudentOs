import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";

import { colors, spacing, radius, typography } from "../../theme";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export default function Button({
  title,
  loading = false,
  style,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={[
        styles.button,
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.light.primary,
    paddingVertical: spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    ...typography.body,
    fontWeight: "600",
  },

  disabled: {
    opacity: 0.5,
  },
});