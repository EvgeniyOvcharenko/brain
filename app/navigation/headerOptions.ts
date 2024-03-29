import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

const styles = (theme: DefaultTheme) =>
  StyleSheet.create({
    tabBarLabelStyle: {
      fontSize: 9,
      fontFamily: 'Georgia-bold',
    },
    tabBarStyle: {
      backgroundColor: theme.colors.shimmer.first,
      paddingVertical: 4,
    },
    tabBarIndicatorStyle: {
      height: 0,
    },
    tabBarItemStyle: {
      borderRadius: 24,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 0,
      marginHorizontal: 4,
      backgroundColor: theme.colors.button.blue,
      borderLeftColor: theme.colors.button.primary,
      borderLeftWidth: 4,
    },
  });

export const homeTabBarOptions = (theme: DefaultTheme): MaterialTopTabNavigationOptions => {
  return {
    tabBarActiveTintColor: theme.colors.text.reverse,
    tabBarPressOpacity: 0.8,
    tabBarInactiveTintColor: theme.colors.text.primary,
    tabBarLabelStyle: styles(theme).tabBarLabelStyle,
    tabBarStyle: styles(theme).tabBarStyle,
    tabBarAllowFontScaling: true,
    tabBarIndicatorStyle: styles(theme).tabBarIndicatorStyle,
    swipeEnabled: true,
    tabBarGap: 0,
    tabBarItemStyle: styles(theme).tabBarItemStyle,
    tabBarIndicatorContainerStyle: {},
  };
};
