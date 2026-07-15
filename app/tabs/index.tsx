import { View } from "react-native";
import Button from "../../src/components/ui/Button";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Button
        title="StudentOS"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}