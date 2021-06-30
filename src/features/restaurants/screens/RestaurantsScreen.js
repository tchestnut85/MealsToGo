import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import React from "react";
import { RestaurantInfoCard } from "../components/RestaurantCard.js";
import { Searchbar } from "react-native-paper";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 15,
  },
  list: {
    flex: 1,
    padding: 15,
    backgroundColor: "lightgray",
  },
});
