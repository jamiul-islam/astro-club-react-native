import React, { Component } from "react";
import TypeWriter from "react-native-typewriter";

import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Animated,
  Easing,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";
import { colors, spacing } from "../themes";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={{ textTransform: "uppercase" }}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const {
    name,
    description,
    wikiLink,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
  } = planet;

  class TypingText extends Component {
    render() {
      return (
        <TypeWriter typing={1} initialDelay={1000} maxDelay={100}>
          {name}
        </TypeWriter>
      );
    }
  }

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };

  const renderImage = (name) => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "earth":
        return <EarthSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "mars":
        return <MarsSvg />;
      case "neptune":
        return <NeptuneSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "venus":
        return <VenusSvg />;
    }
  };

  let rotateValueHolder = new Animated.Value(0);
  const startRotation = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "720deg"],
  });

  return (
    <View style={styles.container}>
      <PlanetHeader backButton={true} />
      <ScrollView>
        <Animatable.View
          animation="zoomInDown"
          easing="ease-in-out-back"
          style={styles.planetImageView}
        >
          <TouchableOpacity onPress={startRotation}>
            <Animated.View style={{ transform: [{ rotate: RotateData }] }}>
              {renderImage(name)}
            </Animated.View>
          </TouchableOpacity>
        </Animatable.View>
        <View style={styles.detailsView}>
          <Animatable.View animation={"bounce"} delay={1800}>
            <Text preset="h1" style={styles.name}>
              <TypingText />
            </Text>
          </Animatable.View>
          <Animatable.View
            animation="fadeInUp"
            easing={"ease-in-out-sine"}
            delay={2500}
            duration={300}
          >
            <Text style={styles.description}>{description}</Text>
          </Animatable.View>
          <Animatable.View
            animation="fadeInUp"
            easing={"ease-in-out-sine"}
            delay={3000}
            duration={300}
          >
            <TouchableOpacity style={styles.source} onPress={onPressLink}>
              <Text>Source: </Text>
              <Text preset="h4" style={styles.wikipedia}>
                Wikipedia
              </Text>
              <Feather name="arrow-up-right" size={17} color="white" />
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <View style={{ height: 40 }} />
        <PlanetSection title="ROTATION TIME" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
        <PlanetSection title="RADIUS" value={radius} />
        <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
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
  description: {
    textAlign: "center",
    marginTop: spacing[5],
    lineHeight: 21,
  },
  source: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing[5],
  },
  wikipedia: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  planetSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: spacing[5],
    marginBottom: spacing[4],
    flex: 1,
  },
});
