import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Home } from "../containers/home/home";
import { Settings } from "../containers/home/settings";

type HomeRoutesParams = {
  Home: undefined;
  Settings: undefined;
};

const HomeStack = createMaterialTopTabNavigator<HomeRoutesParams>();

export const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};
