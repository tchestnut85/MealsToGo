import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";
import { SafeArea } from "./src/components/utils/SafeArea";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "./src/infrastructure/theme";

const { Navigator, Screen } = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Restaurants = () => <RestaurantsScreen />;

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "teal",
                inactiveTintColor: "gray",
              }}
            >
              <Screen name="Restaurants" component={Restaurants} />
              <Screen name="Map" component={Map} />
              <Screen name="Settings" component={Settings} />
            </Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
