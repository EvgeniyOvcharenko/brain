import { DefaultTheme } from "styled-components/native";
import { Fonts } from "../fonts/text.fonts";

export const themeColors = {
  white: "#FFFFFF",
  black: "#000000",

  lightGrey: "#d3d2d2",
  grey: "#a7a5a5",
  darkGrey: "#424242",

  lightOrange: "#FFA600",
  orange: "#FF8000",
  darkOrange: "#FF6A00",

  lightBlue: "#036EEE",
  blue: "#0335EE",
  darkBlue: "#001EC4",

  success: "#00AA5F",
  error: "#EC0B43",
};

export const lightColors: DefaultTheme["colors"] = {
  text: {
    primary: themeColors.black,
    secondary: themeColors.darkGrey,
    disabled: themeColors.grey,
    reverse: themeColors.white,
  },
  button: {
    primary: themeColors.black, //
    secondary: themeColors.black, //
    disabled: themeColors.grey,
    white: themeColors.white,
    blue: themeColors.lightBlue,
  },
  layout: {
    page: themeColors.black,
    card: themeColors.black,
  },
  border: {
    border1: themeColors.black,
    border2: themeColors.black,
  },
  shimmer: {
    first: themeColors.lightOrange,
    second: themeColors.orange,
  },
};

export const darkColors: DefaultTheme["colors"] = {
  text: {
    primary: themeColors.white,
    secondary: themeColors.lightGrey,
    disabled: themeColors.grey,
    reverse: themeColors.black,
  },
  button: {
    primary: themeColors.white, //
    secondary: themeColors.white, //
    disabled: themeColors.grey,
    white: themeColors.white,
    blue: themeColors.blue,
  },
  layout: {
    page: themeColors.white,
    card: themeColors.white,
  },
  border: {
    border1: themeColors.white,
    border2: themeColors.white,
  },
  shimmer: {
    first: themeColors.orange,
    second: themeColors.darkOrange,
  },
};

const letterSpacing: DefaultTheme["letterSpacings"] = (
  fontSize: number,
  percentage: number
) => {
  return fontSize * percentage;
};

export const themeApp = {
  light: { colors: lightColors, letterSpacing: letterSpacing, fonts: Fonts },
  dark: { colors: darkColors, letterSpacing: letterSpacing, fonts: Fonts },
};

export type TextColorVariants = keyof DefaultTheme["colors"]["text"];
