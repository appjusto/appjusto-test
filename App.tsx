import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";

export default function App() {
  const deeplink = Linking.useURL();
  return (
    <View style={styles.container}>
      <Text>Deeplink: {deeplink} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
