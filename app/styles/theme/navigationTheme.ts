import { Theme } from '@react-navigation/native';
import { themeColors } from './theme';

export const WhiteTheme: Theme = {
  dark: false,
  colors: {
    primary: themeColors.darkGrey,
    background: themeColors.white,
    card: themeColors.white,
    text: themeColors.darkGrey,
    border: themeColors.white,
    notification: themeColors.orange,
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: themeColors.white,
    background: themeColors.darkGrey,
    card: themeColors.darkGrey,
    text: themeColors.white,
    border: themeColors.darkGrey,
    notification: themeColors.orange,
  },
};
