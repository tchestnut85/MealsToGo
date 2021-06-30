import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

// const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search:</Text>
        </View>
        <View style={styles.list}>
          <Text>Result list:</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    paddingVertical: 15,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: "blue",
  },
});
