import { StyleSheet } from "react-native";
import { themeColors } from "../styles/theme/theme";

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 16,
    fontFamily: "Georgia-bold",
  },
  tabBarStyle: {
    backgroundColor: "transparent",
  },
  tabBarIndicatorStyle: {
    height: 0,
  },
  tabBarItemStyle: {
    borderRadius: 24,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    marginHorizontal: 8,
    backgroundColor: themeColors.blue,
  },
});

export const homeTabBarOptions = {
  tabBarActiveTintColor: themeColors.white,
  tabBarInactiveTintColor: themeColors.lightGrey,
  tabBarLabelStyle: styles.tabBarLabelStyle,
  tabBarStyle: styles.tabBarStyle,
  tabBarAllowFontScaling: true,
  tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
  tabBarScrollEnabled: true,
  swipeEnabled: true,
  tabBarGap: 5,
  tabBarItemStyle: styles.tabBarItemStyle,
};
