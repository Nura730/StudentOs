import { View, Text, StyleSheet } from "react-native";
import { Task } from "../../types/task";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>

      <Text style={styles.category}>
        {task.category} • {task.priority}
      </Text>

      <Text style={styles.date}>
        {task.dueDate}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#161B22",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#30363D",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  category: {
    marginTop: 6,
    color: "#8B949E",
    fontSize: 14,
  },

  date: {
    marginTop: 10,
    color: "#00E5FF",
    fontSize: 13,
  },
});