import React, { useContext } from 'react';
import { ThemeType } from '../../types/themeTypes';

export interface IThemeContext {
  currentTheme: ThemeType;
  toggleTheme?: () => void;
}
export const ThemePreferenceContext = React.createContext<IThemeContext>({
  currentTheme: ThemeType.LIGHT,
  toggleTheme: () => null,
});

export const useGetCustomTheme = (): IThemeContext => {
  return useContext(ThemePreferenceContext);
};
