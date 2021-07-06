import {
  Address,
  Content,
  Icon,
  Info,
  IsOpen,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Statuses,
  SubContent,
} from "./RestaurantCardStyles";

import React from "react";
import { Spacer } from "../../../components/Spacer";
import { SvgXml } from "react-native-svg";
import { Text } from "../../../components/typography/Text/index";
import open from "../../../../assets/open";
import star from "../../../../assets/star";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Res Name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ],
    address = "50 Main St",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5} key={name}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Content>
          <SubContent>
            <Text variant="label">{name}</Text>
            <Rating>
              {ratingArray.map((item, i) => (
                <SvgXml xml={star} width={20} height={20} key={i} />
              ))}
            </Rating>
            <Address>{address}</Address>
          </SubContent>
          <SubContent>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Statuses>
              <Spacer position="top" size="large">
                {isOpenNow && (
                  <IsOpen>
                    <SvgXml xml={open} width={20} height={20} />
                  </IsOpen>
                )}
              </Spacer>
              <Spacer position="top" size="lage">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </Statuses>
          </SubContent>
        </Content>
      </Info>
    </RestaurantCard>
  );
};
