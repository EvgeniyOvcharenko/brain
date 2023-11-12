export enum ThemeType {
  LIGHT = "light",
  DARK = "dark",
}

export interface IMyTheme {
  colors: {
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    button: {
      primary: string;
      secondary: string;
      disabled: string;
      white: string;
      blue: string;
    };
    layout: {
      page: string;
      card: string;
    };
    border: {
      border1: string;
      border2: string;
    };
    shimmer: {
      first: string;
      second: string;
    };
  };
  fonts: any;
  letterSpacings: (fontSize: number, percentage: number) => number;
}
