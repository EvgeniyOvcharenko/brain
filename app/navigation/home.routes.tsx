import {
  MaterialTopTabScreenProps,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import React from "react";
import { GameHome } from "../containers/main/gameHome";
import { SettingsHome } from "../containers/main/settingsHome";
import { homeTabBarOptions } from "./headerOptions";
import { LevelsHome } from "../containers/main/levelsHome";

type HomeRoutesParams = {
  GameHome: undefined;
  SettingsHome: undefined;
  LevelsHome: undefined;
};

const HomeStack = createMaterialTopTabNavigator<HomeRoutesParams>();

export type HomeStackProps = MaterialTopTabScreenProps<HomeRoutesParams>;
export const MainRoutes = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="GameHome"
      screenOptions={homeTabBarOptions}
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
