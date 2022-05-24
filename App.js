import React, { useState } from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";

import { colors } from "./src/themes/colors";
import { spacing } from "./src/themes/spacing";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import useFonts from "./hooks/useFonts";

import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";

const Stack = createNativeStackNavigator();

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <View style={styles.androidSafeArea}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false, gestureDirection: true }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
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
