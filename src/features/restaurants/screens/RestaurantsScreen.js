import { FlatList, View } from "react-native";
import React, { useContext } from "react";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context.js";
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
  const { isLoading, error, restaurants } = useContext(RestaurantContext);

  return (
    <SafeArea>
      <View>
        <Search placeholder="Search" />
      </View>
      <RestaurantList
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="small">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};
