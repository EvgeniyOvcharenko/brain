import { StyleSheet } from "react-native";
import { themeColors } from "../styles/theme/theme";
import { IMyTheme } from "../types/themeTypes";

const styles = (theme: IMyTheme) =>
  StyleSheet.create({
    tabBarLabelStyle: {
      fontSize: 12,
      fontFamily: "Georgia-bold",
    },
    tabBarStyle: {
      backgroundColor: "red",
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
    },
  });

export const homeTabBarOptions = (theme: IMyTheme) => {
  return {
    tabBarActiveTintColor: themeColors.white,
    tabBarPressOpacity: 0.8,
    tabBarInactiveTintColor: themeColors.lightGrey,
    tabBarLabelStyle: styles(theme).tabBarLabelStyle,
    tabBarStyle: styles(theme).tabBarStyle,
    tabBarAllowFontScaling: true,
    tabBarIndicatorStyle: styles(theme).tabBarIndicatorStyle,
    swipeEnabled: true,
    tabBarGap: 5,
    tabBarItemStyle: styles(theme).tabBarItemStyle,
  };
};
