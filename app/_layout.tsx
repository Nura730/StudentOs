import { Stack } from "expo-router";
import { useEffect } from "react";
import { initializeDatabase } from "../src/database/schema";

export default function RootLayout() {
  useEffect(() => {
    initializeDatabase()
      .then(() => console.log("✅ Database Ready"))
      .catch(console.error);
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}