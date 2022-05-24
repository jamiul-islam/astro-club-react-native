import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { PLANET_LIST } from "../data/planet-list";
import { colors, spacing } from "../themes";

const PlanetItem = ({ item }) => {
  const { name, color } = item;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate("Details", { planet: item });
      }}
    >
      <View style={styles.itemChild}>
        <View style={[styles.circle, { backgroundColor: color }]} />
        <Text preset="h4" style={styles.itemName}>
          {name}
        </Text>
      </View>
      <AntDesign name="right" size={15} color="white" />
    </TouchableOpacity>
  );
};

export default function Home({ navigation }) {
  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
  },
  itemChild: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  list: {
    padding: spacing[4],
  },
  separator: {
    borderBottomColor: colors.grey,
    borderWidth: 0.5,
  },
});
