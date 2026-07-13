import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { dashboardTheme } from "./theme";

type ProgressCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  current: number;
  total: number;
  accentColor?: string;
};

export default function ProgressCard({
  icon,
  title,
  subtitle,
  current,
  total,
  accentColor = dashboardTheme.colors.accent,
}: ProgressCardProps) {
  const ratio = total > 0 ? Math.min(current / total, 1) : 0;
  const percentLabel = Math.round(ratio * 100);

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View
          style={[
            styles.iconWrap,
            { backgroundColor: accentColor + "22", borderColor: accentColor + "55" },
          ]}
        >
          <Ionicons name={icon} size={18} color={accentColor} />
        </View>

        <View style={styles.headerText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <Text style={[styles.percent, { color: accentColor }]}>
          {percentLabel}%
        </Text>
      </View>

      <View style={styles.trackBackground}>
        <View
          style={[
            styles.trackFill,
            { width: `${percentLabel}%`, backgroundColor: accentColor },
          ]}
        />
      </View>

      <Text style={styles.countLabel}>
        {current} / {total}
      </Text>
    </View>
  );
}

const { colors, spacing, radius } = dashboardTheme;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: radius.sm,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.sm,
  },
  headerText: {
    flex: 1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600",
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  percent: {
    fontSize: 16,
    fontWeight: "700",
  },
  trackBackground: {
    height: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceElevated,
    overflow: "hidden",
  },
  trackFill: {
    height: "100%",
    borderRadius: radius.pill,
  },
  countLabel: {
    color: colors.textTertiary,
    fontSize: 12,
    marginTop: spacing.xs,
    textAlign: "right",
  },
});
