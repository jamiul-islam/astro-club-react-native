import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";

import { colors } from "./src/themes/colors";
import Text from "./src/components/text/text";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import About from "./src/screens/About";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
          "Spartan-Bold": require("./assets/fonts/Spartan-Bold.ttf"),
          "Spartan-Regular": require("./assets/fonts/Spartan-Regular.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.androidSafeArea} onLayout={onLayoutRootView}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={colors.black} />
    </View>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.black,
  },
});
