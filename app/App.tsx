import React, { useEffect, useState } from "react";
import { StatusBar, Platform } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { IThemeContext, ThemePreferenceContext } from "./styles/theme/hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeRoutes } from "./navigation/home.routes";
import DevMenu from "./components/devMenu";
import { DarkTheme, WhiteTheme } from "./styles/theme/navigationTheme";

type ICurrentTheme = IThemeContext["currentTheme"];
export const App = () => {
  const [currentTheme, setCurrentTheme] = useState<ICurrentTheme>("light");

  useEffect(() => {
    initStatusBar();
  }, [currentTheme]);

  const initStatusBar = () => {
    StatusBar.setHidden(false);
    StatusBar.setBarStyle(
      currentTheme === "dark" ? "light-content" : "dark-content"
    );
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }
  };

  const toggleTheme = () => {
    setCurrentTheme((state: ICurrentTheme): ICurrentTheme => {
      return state === "light" ? "dark" : "light";
    });
  };

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <ThemePreferenceContext.Provider value={{ currentTheme, toggleTheme }}>
        <NavigationContainer
          theme={currentTheme === "light" ? WhiteTheme : DarkTheme}
        >
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeRoutes} />
          </Stack.Navigator>
        </NavigationContainer>
        <DevMenu />
      </ThemePreferenceContext.Provider>
    </SafeAreaProvider>
  );
};
