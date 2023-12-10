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
import { locales } from "../locales/localization";

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
          title: locales('TAB_SETTINGS_TITLE'),
        }}
      />
      <HomeStack.Screen
        name="GameHome"
        component={GameHome}
        options={{
          title: locales('TAB_GAME_TITLE'),
        }}
      />
      <HomeStack.Screen
        name="LevelsHome"
        component={LevelsHome}
        options={{
          title: locales('TAB_LEVELS_TITLE'),
        }}
      />
    </HomeStack.Navigator>
  );
};
