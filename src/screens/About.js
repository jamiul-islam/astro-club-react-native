import React, { Component, useRef } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import TypeWriter from "react-native-typewriter";
import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";
import {
  FontAwesome5,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Text from "../components/text/text";
import { colors, spacing } from "../themes";
import PlanetHeader from "../components/planet-header";

export default function About() {
  const animation = useRef(null);
  const handleCongratsAnimation = () => {
    animation.current?.reset();
    animation.current?.play();
  };
  class TypingText extends Component {
    render() {
      return (
        <TypeWriter typing={1} initialDelay={800} maxDelay={100}>
          Jamiul Islam
        </TypeWriter>
      );
    }
  }
  class TypingDesignation extends Component {
    render() {
      return (
        <TypeWriter typing={1} initialDelay={2000} maxDelay={80}>
          Software Engineer, InvestSky UAE
        </TypeWriter>
      );
    }
  }
  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        source={require("../../assets/congrats.json")}
      />
      <ScrollView>
        <PlanetHeader backButton={true} about={false} />
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/pictures/profile-pic.jpg")}
        />
        <View style={styles.detailsView}>
          <Animatable.View animation={"tada"} delay={5000}>
            <Text preset="h1" style={styles.name}>
              <TypingText />
            </Text>
          </Animatable.View>
          <Animatable.View animation={"fadeIn"} delay={2150}>
            <Text preset="small" style={styles.name}>
              <TypingDesignation />
            </Text>
          </Animatable.View>
          <Animatable.View
            animation={"bounceInUp"}
            delay={5600}
            duration={1500}
            easing={"ease-in-out"}
          >
            <Text preset="small" style={[styles.name, styles.details]}>
              Hi, I am Jamiul Islam, a CS Student, mentor of Scratch and
              JavaScript, and writer of Sci-fi articles for several publications
              on Medium. Other than coding, I spend my pastimes playing
              classical guitar or having a nice evening out with friends. Is
              there anything else you’d like to know about me?
            </Text>
          </Animatable.View>
          <View style={styles.social}>
            <Animatable.View
              animation={"bounceInUp"}
              delay={7200}
              duration={100}
            >
              <TouchableOpacity
                style={styles.socialChild}
                onPress={() =>
                  Linking.openURL("https://www.facebook.com/zamiWC")
                }
              >
                <FontAwesome5 name="facebook" size={24} color="white" />
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View
              animation={"bounceInUp"}
              delay={7350}
              duration={100}
            >
              <TouchableOpacity
                style={styles.socialChild}
                onPress={() =>
                  Linking.openURL("https://www.instagram.com/_zamiul_islam_")
                }
              >
                <AntDesign name="instagram" size={24} color="white" />
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View
              animation={"bounceInUp"}
              delay={7500}
              duration={100}
            >
              <TouchableOpacity
                style={styles.socialChild}
                onPress={() =>
                  Linking.openURL("https://www.linkedin.com/in/jamiul-islam")
                }
              >
                <Entypo name="linkedin" size={24} color="white" />
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View
              animation={"bounceInUp"}
              delay={7650}
              duration={100}
            >
              <TouchableOpacity
                style={styles.socialChild}
                onPress={() =>
                  Linking.openURL("https://github.com/lucifer1112k")
                }
              >
                <AntDesign name="github" size={24} color="white" />
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View
              animation={"bounceInUp"}
              delay={7800}
              duration={100}
              onAnimationEnd={handleCongratsAnimation}
            >
              <TouchableOpacity
                style={styles.socialChild}
                onPress={() => Linking.openURL("https://jamiul-islam.web.app")}
              >
                <MaterialCommunityIcons name="web" size={28} color="white" />
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </View>
      </ScrollView>
      <Text style={styles.footer} preset="small">
        &copy; jamiul islam || 2022
      </Text>
      <Text style={styles.footer} preset="small">
        design: frontendmentor.io || code: jamiul islam
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    alignItems: "center",
  },
  tinyLogo: {
    width: 250,
    height: 240,
    marginTop: spacing[7],
    alignSelf: "center",
  },
  detailsView: {
    marginTop: spacing[7],
    marginHorizontal: spacing[6],
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: spacing[2],
  },
  details: {
    marginTop: spacing[8],
    textAlign: "left",
    lineHeight: spacing[5],
    textTransform: "none",
    fontSize: 13,
  },
  social: {
    flexDirection: "row",
    alignItems: "center",
  },
  socialChild: {
    paddingHorizontal: spacing[1],
    marginTop: spacing[4],
  },
  footer: {
    flex: 0.4,
    textAlign: "center",
    justifyContent: "flex-end",
    fontSize: 8,
  },
});
