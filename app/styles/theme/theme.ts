import { IMyTheme } from "../../types/themeTypes";

export const themeColors = {
  white: "#FFFFFF",
  black: "#000000",

  lightGrey: "#d3d2d2",
  grey: "#a7a5a5",
  darkGrey: "#424242",
  
  orange: "#FA6428",
  lightOrange: "#FEEFE9",
  success: "#00AA5F",
  error: "#EC0B43",
  blue: "#2997FF",
};

export const lightColors: IMyTheme["colors"] = {
  text: {
    primary: themeColors.black,
    secondary: themeColors.darkGrey,
    disabled: themeColors.grey,
  },
  button: {
    primary: themeColors.black,
    secondary: themeColors.black,
    disabled: themeColors.grey,
    white: themeColors.black,
  },
  layout: {
    page: themeColors.black,
    card: themeColors.black,
  },
  border: {
    border1: themeColors.black,
    border2: themeColors.black,
  },
};

export const darkColors: IMyTheme["colors"] = {
  text: {
    primary: themeColors.white,
    secondary: themeColors.lightGrey,
    disabled: themeColors.grey,
  },
  button: {
    primary: themeColors.white,
    secondary: themeColors.white,
    disabled: themeColors.grey,
    white: themeColors.white,
  },
  layout: {
    page: themeColors.white,
    card: themeColors.white,
  },
  border: {
    border1: themeColors.white,
    border2: themeColors.white,
  },
};

export const themeApp = {
  light: { colors: lightColors },
  dark: { colors: darkColors },
};

export type TextColorVariants = keyof IMyTheme["colors"]["text"];
