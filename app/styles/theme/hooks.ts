import React, { useContext } from 'react';
import { ThemeType } from '../../types/themeTypes';
import { AppLanguages } from '../../locales/constants';

export interface IThemeContext {
  currentTheme: ThemeType;
  toggleTheme?: () => void;
  localeApp?: AppLanguages;
  toggleLocale?: () => void;
}
export const ThemePreferenceContext = React.createContext<IThemeContext>({
  currentTheme: ThemeType.LIGHT,
  toggleTheme: () => null,
  localeApp: AppLanguages.EN,
  toggleLocale: () => null,
});

export const useGetCustomTheme = (): IThemeContext => {
  return useContext(ThemePreferenceContext);
};
