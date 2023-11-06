import { Theme } from '@react-navigation/native';
import { themeColors } from './theme';

export const WhiteTheme: Theme = {
  dark: false,
  colors: {
    primary: themeColors.ink,
    background: themeColors.white,
    card: themeColors.white,
    text: themeColors.ink,
    border: themeColors.white,
    notification: themeColors.orange,
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: themeColors.white,
    background: themeColors.ink,
    card: themeColors.ink,
    text: themeColors.white,
    border: themeColors.ink,
    notification: themeColors.orange,
  },
};
