import { Platform, StatusBar } from "react-native";
import { ThemeType } from "../types/themeTypes";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { appThemeAtom } from "../atom/appAtom";

export const useInitStatusBar = () => {
  const [currentTheme] = useAtom(appThemeAtom);
  useEffect(() => {
    StatusBar.setHidden(false);
    StatusBar.setBarStyle(
      currentTheme === ThemeType.DARK ? "light-content" : "dark-content"
    );
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }
  }, [currentTheme]);
};
