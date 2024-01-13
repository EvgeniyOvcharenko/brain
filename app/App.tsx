import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAtom } from "jotai";
import React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import { appLocaleAtom, appThemeAtom } from "./atom/appAtom";
import DevMenu from "./components/devMenu";
import { Icon } from "./components/icon/icon";
import { useInitStatusBar } from "./core/initStatusBar";
import { AppLanguages } from "./locales/constants";
import { MainRoutes } from "./navigation/home.routes";
import { ThemePreferenceContext } from "./styles/theme/hooks";
import { DarkTheme, WhiteTheme } from "./styles/theme/navigationTheme";
import { themeApp } from "./styles/theme/theme";
import { IMyTheme, ThemeType } from "./types/themeTypes";

const Stack = createNativeStackNavigator();

export const App = () => {
  const [localeApp, setLocaleApp] = useAtom(appLocaleAtom);
  const [currentTheme, setCurrentTheme] = useAtom(appThemeAtom);
  const theme: IMyTheme = themeApp[currentTheme];

  useInitStatusBar();

  const toggleTheme = () => {
    setCurrentTheme(
      currentTheme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT
    );
  };

  const toggleLocale = () => {
    setLocaleApp(
      localeApp === AppLanguages.EN ? AppLanguages.UA : AppLanguages.EN
    );
  };

  return (
    <SafeAreaProvider>
      <ThemePreferenceContext.Provider
        value={{ currentTheme, toggleTheme, localeApp, toggleLocale }}
      >
        <ThemeProvider theme={theme}>
          <NavigationContainer
            theme={currentTheme === ThemeType.LIGHT ? WhiteTheme : DarkTheme}
          >
            <Stack.Navigator
              screenOptions={{
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: theme.colors.shimmer.first,
                },
                headerTitle: () => {
                  return (
                    <Icon
                      name="logoBrain"
                      size={36}
                      color={theme.colors.button.blue}
                    />
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
