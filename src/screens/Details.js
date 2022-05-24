import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
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

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const { name } = planet;

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
  return (
    <View style={styles.container}>
      <PlanetHeader backButton={true} />
      <ScrollView>
        <View style={styles.planetImageView}>{renderImage(name)}</View>
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
    padding: spacing[5],
    alignItems: "center",
    justifyContent: "center",
  },
});
