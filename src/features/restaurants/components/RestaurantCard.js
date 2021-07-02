import { Image, Text, View } from "react-native";

import { Card } from "react-native-paper";
import React from "react";
import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import star from "../../../../assets/star";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Content = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SubContent = styled(View)`
  align-content: space-between;
  justify-content: space-evenly;
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading}
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Statuses = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const IsOpen = styled(View)`
  align-items: center;
`;

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
            <Title>{name}</Title>
            <Rating>
              {ratingArray.map((i) => (
                <SvgXml xml={star} width={20} height={20} key={i} />
              ))}
            </Rating>
            <Address>{address}</Address>
          </SubContent>
          <SubContent>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Statuses>
              {isOpenNow && (
                <IsOpen>
                  <SvgXml xml={open} width={20} height={20} />
                </IsOpen>
              )}
              <Image source={{ uri: icon }} style={{ width: 20, height: 20 }} />
            </Statuses>
          </SubContent>
        </Content>
      </Info>
    </RestaurantCard>
  );
};
