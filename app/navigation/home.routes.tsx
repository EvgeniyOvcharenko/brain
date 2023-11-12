import {
  MaterialTopTabScreenProps,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import React from "react";
import { GameHome } from "../containers/home/gameHome";
import { SettingsHome } from "../containers/home/settingsHome";
import { homeTabBarOptions } from "./headerOptions";
import { LevelsHome } from "../containers/home/levelsHome";
import { useTheme } from "styled-components/native";

type HomeRoutesParams = {
  GameHome: undefined;
  SettingsHome: undefined;
  LevelsHome: undefined;
};

const HomeStack = createMaterialTopTabNavigator<HomeRoutesParams>();

export type HomeStackProps = MaterialTopTabScreenProps<HomeRoutesParams>;
export const MainRoutes = () => {
  const theme = useTheme();
  return (
    <HomeStack.Navigator
      initialRouteName="GameHome"
      screenOptions={{...homeTabBarOptions(theme)}}
    >
      <HomeStack.Screen
        name="SettingsHome"
        component={SettingsHome}
        options={{
          title: "Settings",
        }}
      />
      <HomeStack.Screen
        name="GameHome"
        component={GameHome}
        options={{
          title: "Game",
        }}
      />
      <HomeStack.Screen
        name="LevelsHome"
        component={LevelsHome}
        options={{
          title: "Levels",
        }}
      />
    </HomeStack.Navigator>
  );
};
