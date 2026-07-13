import { View, Text, StyleSheet } from "react-native";
import { dashboardTheme } from "./theme";

type GreetingHeaderProps = {
  name: string;
};

function getGreeting(hour: number): string {
  if (hour < 5) return "Still up?";
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
}

function getFormattedDate(date: Date): string {
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export default function GreetingHeader({ name }: GreetingHeaderProps) {
  const now = new Date();
  const greeting = getGreeting(now.getHours());
  const dateLabel = getFormattedDate(now);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        {greeting}, {name}
      </Text>
      <Text style={styles.date}>{dateLabel}</Text>
    </View>
  );
}

const { colors, spacing } = dashboardTheme;

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  greeting: {
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: "700",
  },
  date: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: spacing.xs,
  },
});
