import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors, spacing } from "../themes";
import Text from "./text/text";
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ backButton = false, about = false }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            style={{ paddingRight: spacing[4] }}
            name="left"
            size={15}
            color="white"
          />
        </TouchableOpacity>
      )}
      <Text preset="h2">THE PLANETS</Text>
      {about && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("About");
          }}
        >
          <Text preset="small" style={styles.aboutText}>
            about me
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[6],
    borderBottomWidth: 0.5,
    borderColor: colors.white,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.black,
  },
});
