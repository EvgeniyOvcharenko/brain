import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Platform, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import DevMenu from "./components/devMenu";
import { Icon } from "./components/icon/icon";
import { Shimmer } from "./components/shimmer/shimmer";
import { MainRoutes } from "./navigation/home.routes";
import { IThemeContext, ThemePreferenceContext } from "./styles/theme/hooks";
import { DarkTheme, WhiteTheme } from "./styles/theme/navigationTheme";
import { themeApp, themeColors } from "./styles/theme/theme";
import { ThemeType } from "./types/themeTypes";

type ICurrentTheme = IThemeContext["currentTheme"];
export const App = () => {
  const [currentTheme, setCurrentTheme] = useState<ICurrentTheme>(
    ThemeType.LIGHT
  );

  useEffect(() => {
    initStatusBar();
  }, [currentTheme]);

  const initStatusBar = () => {
    StatusBar.setHidden(false);
    StatusBar.setBarStyle(
      currentTheme === ThemeType.DARK ? "light-content" : "dark-content"
    );
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }
  };

  const toggleTheme = () => {
    setCurrentTheme((state: ICurrentTheme): ICurrentTheme => {
      return state === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
    });
  };

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <ThemePreferenceContext.Provider value={{ currentTheme, toggleTheme }}>
        <ThemeProvider theme={themeApp[currentTheme]}>
          <NavigationContainer
            theme={currentTheme === ThemeType.LIGHT ? WhiteTheme : DarkTheme}
          >
            <Stack.Navigator
              screenOptions={{
                headerShadowVisible: false,
                headerBackground: () => {
                  return <Shimmer />;
                },
                headerTitle: () => {
                  return (
                    <Icon name="logoBrain" size={36} color={themeColors.blue} />
                  );
                },
              }}
            >
              <Stack.Screen name="MainRoutes" component={MainRoutes} />
            </Stack.Navigator>
          </NavigationContainer>
          <DevMenu />
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </SafeAreaProvider>
  );
};
