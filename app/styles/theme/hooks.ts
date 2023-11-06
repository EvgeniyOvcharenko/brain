import React, { useContext } from 'react';

export interface IThemeContext {
  currentTheme: 'light' | 'dark';
  toggleTheme?: () => void;
}
export const ThemePreferenceContext = React.createContext<IThemeContext>({
  currentTheme: 'light',
  toggleTheme: () => null,
});

export const useGetCustomTheme = (): IThemeContext => {
  return useContext(ThemePreferenceContext);
};
