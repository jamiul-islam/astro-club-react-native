import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { colors, spacing } from "../themes";

export default function WelcomeScreen({ navigation }) {
  let rotateValueHolder = new Animated.Value(0);
  const startRotation = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 0.5],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Animatable.View
          animation="zoomInDown"
          easing="ease-in-out-back"
          style={styles.planetImageView}
        >
          <TouchableOpacity onPress={startRotation()}>
            <Animated.View style={{ transform: [{ rotate: RotateData }] }}>
              <Image
                style={styles.tinyLogo}
                source={require("../../assets/logo.png")}
              />
            </Animated.View>
          </TouchableOpacity>
        </Animatable.View>
        <View style={styles.detailsView}>
          <Animatable.View animation={"bounce"} delay={1500}>
            <Text preset="h1" style={styles.name}>
              Welcome to Astro-Club
            </Text>
          </Animatable.View>
          <Animatable.View animation={"tada"} delay={2000} duration={2000}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.nextButton} preset="h1">
                Next
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  tinyLogo: { width: 320, height: 250 },
  planetImageView: {
    marginTop: spacing[9],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsView: {
    marginTop: spacing[9],
    marginHorizontal: spacing[6],
  },
  name: {
    textAlign: "center",
    textTransform: "uppercase",
  },
  nextButton: {
    marginTop: spacing[8],
    textAlign: "center",
    backgroundColor: colors.green,
    width: 200,
    alignSelf: "center",
  },
});
