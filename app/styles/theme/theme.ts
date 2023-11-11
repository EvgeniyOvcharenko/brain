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

export type TextColorVariants = keyof IMyTheme["colors"]["text"];
