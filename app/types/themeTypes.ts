export enum ThemeType {
  LIGHT = "light",
  DARK = "dark",
}

export interface IMyTheme {
  colors: {
    text: {
      disabled: string;
      primary: string;
      reverse: string;
      secondary: string;
    };
    button: {
      blue: string;
      disabled: string;
      primary: string;
      secondary: string;
      white: string;
    };
    layout: {
      card: string;
      page: string;
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
