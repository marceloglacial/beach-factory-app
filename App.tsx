import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <View className="items-center justify-center bg-red-600 p-8 rounded-lg">
        <Text className="text-2xl text-white text-center">
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
