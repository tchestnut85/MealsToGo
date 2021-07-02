import { SafeAreaView, StatusBar, View } from "react-native";

import React from "react";
import { RestaurantInfoCard } from "../components/RestaurantCard.js";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

const Search = styled(Searchbar)`
  padding: ${(props) => props.theme.space[2]};
`;

const List = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.muted};
`;

export const RestaurantsScreen = () => {
  return (
    <Container>
      <View>
        <Search placeholder="Search" />
      </View>
      <List>
        <RestaurantInfoCard />
      </List>
    </Container>
  );
};
