import { FlatList, SafeAreaView, StatusBar, View } from "react-native";

import React from "react";
import { RestaurantInfoCard } from "../components/RestaurantCard.js";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../components/Spacer";
import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

const Search = styled(Searchbar)`
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <Container>
      <View>
        <Search placeholder="Search" />
      </View>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
        ]}
        keyExtractor={(item) => item.name}
        renderItem={() => (
          <Spacer position="bottom" size="small">
            <RestaurantInfoCard />
          </Spacer>
        )}
      />
    </Container>
  );
};
