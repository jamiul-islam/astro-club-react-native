import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
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

export default function Home() {
  const [list, setList] = useState(PLANET_LIST);
  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };

  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLocaleLowerCase();
      const userText = text.toLocaleLowerCase();
      return itemName.indexOf(userText) > -1;
    });
    setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <PlanetHeader />
      <TextInput
        placeholder="type a planet's name"
        placeholderTextColor={colors.grey}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => searchFilter(text)}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
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
  searchInput: {
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[2],
    color: colors.white,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});
