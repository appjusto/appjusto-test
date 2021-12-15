import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Linking from "expo-linking";

export default function App() {
  // state
  const deeplink = Linking.useURL();
  const [loaded, setLoaded] = React.useState(false);
  // effects
  React.useEffect(() => {
    (async () => {
      SplashScreen.preventAutoHideAsync();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoaded(true);
    })();
  }, []);
  // UI
  const onLayoutRootView = React.useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) return null;
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
