import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className={HeroStyles.container}>
      <Text className={HeroStyles.title}>🏖️ Beach Factory 🎾</Text>
      <Text>work in progress</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const HeroStyles = {
  container: "flex-1 items-center justify-center",
  title: "text-4xl text-center",
};
