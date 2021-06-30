import { StyleSheet, Text, View } from "react-native";

import { Card } from "react-native-paper";
import React from "react";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Res Name",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ],
    address = "50 Main St",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card elevation={5} key={name}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <View style={styles.contentWrap}>
        <Card.Content style={styles.content}>
          <Text style={styles.title}>{name}</Text>
          <Text>{address}</Text>
        </Card.Content>
        <Card.Content style={styles.content}>
          <Text>Rating: {rating}/5</Text>
          <Text>Open now: {isOpenNow ? "Yes!" : "No!"}</Text>
        </Card.Content>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { backgroundColor: "white" },
  title: { fontWeight: "700", fontSize: 20 },
  contentWrap: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    textAlign: "left",
  },
});
