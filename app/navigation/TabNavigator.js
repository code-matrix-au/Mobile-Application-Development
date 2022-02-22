import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppTab = createBottomTabNavigator();

import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";
import TravelScreen from "../screens/TravelScreen";

import HomeNavigator from "./HomeNavigator";

const TabNavigator = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: AppColors.otherColor,
      activeBackgroundColor: AppColors.primaryColor,
    }}
  >
    <AppTab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="home"
            backgroundColor={AppColors.otherColor}
          />
        ),
      }}
    />
    <AppTab.Screen
      name="NewItem"
      component={TravelScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="plus-circle"
            backgroundColor={AppColors.otherColor}
          />
        ),
      }}
    />
  </AppTab.Navigator>
);

export default TabNavigator;
