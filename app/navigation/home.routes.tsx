import {
  MaterialTopTabScreenProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import React from 'react';
import { GameHome } from '../containers/main/gameHome';
import { SettingsHome } from '../containers/main/settingsHome';
import { homeTabBarOptions } from './headerOptions';
import { LevelsHome } from '../containers/main/levelsHome';
import { useTheme } from 'styled-components/native';
import { locales } from '../locales/localization';

type THomeRoutesParams = {
  GameHome: undefined;
  SettingsHome: undefined;
  LevelsHome: undefined;
};

const HomeStack = createMaterialTopTabNavigator<THomeRoutesParams>();

export type HomeStackProps = MaterialTopTabScreenProps<THomeRoutesParams>;
export const MainRoutes = () => {
  const theme = useTheme();
  return (
    <HomeStack.Navigator
      initialRouteName="GameHome"
      screenOptions={{ ...homeTabBarOptions(theme) }}
    >
      <HomeStack.Screen
        name="LevelsHome"
        component={LevelsHome}
        options={{
          title: locales('TAB_LEVELS_TITLE'),
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
        name="SettingsHome"
        component={SettingsHome}
        options={{
          title: locales('TAB_SETTINGS_TITLE'),
        }}
      />
    </HomeStack.Navigator>
  );
};
