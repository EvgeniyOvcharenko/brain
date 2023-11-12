import { MaterialTopTabNavigationOptions } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import { IMyTheme } from "../types/themeTypes";

const styles = (theme: IMyTheme) =>
  StyleSheet.create({
    tabBarLabelStyle: {
      fontSize: 12,
      fontFamily: "Georgia-bold",
    },
    tabBarStyle: {
      backgroundColor: theme.colors.shimmer.first,
    },
    tabBarIndicatorStyle: {
      height: 0,
    },
    tabBarItemStyle: {
      borderRadius: 24,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 0,
      marginHorizontal: 8,
      backgroundColor: theme.colors.button.blue,
      borderLeftColor: theme.colors.button.primary,
      borderLeftWidth: 3,
    },
  });

export const homeTabBarOptions = (
  theme: IMyTheme
): MaterialTopTabNavigationOptions => {
  return {
    tabBarActiveTintColor: theme.colors.text.reverse,
    tabBarPressOpacity: 0.8,
    tabBarInactiveTintColor: theme.colors.text.primary,
    tabBarLabelStyle: styles(theme).tabBarLabelStyle,
    tabBarStyle: styles(theme).tabBarStyle,
    tabBarAllowFontScaling: true,
    tabBarIndicatorStyle: styles(theme).tabBarIndicatorStyle,
    swipeEnabled: true,
    tabBarGap: 5,
    tabBarItemStyle: styles(theme).tabBarItemStyle,
  };
};
