import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
}

export default function FloatingAddButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Ionicons name="add" size={30} color="#FFF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#00E5FF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
});