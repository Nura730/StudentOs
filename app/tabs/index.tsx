import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GreetingHeader from "../../components/dashboard/GreetingHeader";
import ProgressCard from "../../components/dashboard/ProgressCard";
import FloatingAddButton from "../../components/dashboard/FloatingAddButton";
import { dashboardTheme } from "../../components/dashboard/theme";
import { dummyUser, dummyStats } from "../../components/dashboard/dummyData";

export default function Home() {
  // Dummy state for now — wire up to itemStore / SQLite once the data layer is ready.
  const [stats] = useState(dummyStats);

  function handleAddPress() {
    Alert.alert("Add", "Hook this up to your add-task/add-item flow.");
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <GreetingHeader name={dummyUser.name} />

        <Text style={styles.sectionLabel}>Today's Progress</Text>

        <ProgressCard
          icon="checkbox-outline"
          title="Tasks"
          subtitle="Completed today"
          current={stats.tasksCompleted}
          total={stats.tasksTotal}
          accentColor={dashboardTheme.colors.accent}
        />

        <ProgressCard
          icon="time-outline"
          title="Study Time"
          subtitle="Minutes focused"
          current={stats.studyMinutesToday}
          total={stats.studyMinutesGoal}
          accentColor={dashboardTheme.colors.success}
        />

        <View style={styles.streakCard}>
          <Text style={styles.streakEmoji}>🔥</Text>
          <View>
            <Text style={styles.streakValue}>{stats.currentStreak}-day streak</Text>
            <Text style={styles.streakSubtitle}>Keep it going!</Text>
          </View>
        </View>
      </ScrollView>

      <FloatingAddButton onPress={handleAddPress} />
    </SafeAreaView>
  );
}

const { colors, spacing, radius } = dashboardTheme;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xl * 2,
  },
  sectionLabel: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
  },
  streakCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginTop: spacing.sm,
  },
  streakEmoji: {
    fontSize: 28,
    marginRight: spacing.md,
  },
  streakValue: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "700",
  },
  streakSubtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
});
