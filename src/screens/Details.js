import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
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

  return (
    <View style={styles.container}>
      <PlanetHeader backButton={true} />
      <ScrollView>
        <View style={styles.planetImageView}>{renderImage(name)}</View>
        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity style={styles.source} onPress={onPressLink}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
            <Feather name="arrow-up-right" size={17} color="white" />
          </TouchableOpacity>
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
