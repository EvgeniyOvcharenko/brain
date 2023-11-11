export enum ThemeType {
  LIGHT = "light",
  DARK = "dark",
}

export interface IMyTheme {
  colors: {
    accent: {
      error: string;
      primary: string;
      primaryShaded: string;
      secondary: string;
      success: string;
      white: string;
    };
    border: {
      border1: string;
      border2: string;
      border3: string;
      error: string;
      secondary: string;
    };
    button: {
      disabled: string;
      disabled2: string;
      lightOrange: string;
      primary: string;
      secondary: string;
      tertiary: string;
      white: string;
    };
    icon: {
      active: string;
      primary: string;
    };
    layout: {
      card: string;
      page: string;
      separator: string;
      separatorSecondary: string;
    };
    shadow: {
      primary: string;
    };
    shimmer: {
      first: string;
      second: string;
    };
    text: {
      dark: string;
      disabled: string;
      orange: string;
      primary: string;
      reversed: string;
      secondary: string;
      tertiary: string;
    };
  };
  fonts: any;
  letterSpacings: (fontSize: number, percentage: number) => number;
}
