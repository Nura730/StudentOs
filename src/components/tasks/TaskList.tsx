import { FlatList } from "react-native";
import { Task } from "../../types/task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskCard task={item} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}