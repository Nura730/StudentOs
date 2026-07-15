import { View, Text } from "react-native";
import Card from "../../src/components/ui/Card";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Card>
        <Text>Welcome to StudentOS 🚀</Text>
      </Card>
    </View>
  );
}