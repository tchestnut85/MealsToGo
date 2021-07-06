import { FlatList, View } from "react-native";

import React from "react";
import { RestaurantInfoCard } from "../components/RestaurantCard.js";
import { SafeArea } from "../../../components/utils/SafeArea";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../components/Spacer";
import styled from "styled-components/native";

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
    <SafeArea>
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
    </SafeArea>
  );
};
