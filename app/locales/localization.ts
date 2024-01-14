import { useAtom } from 'jotai';
import { appLocaleAtom } from '../atom/appAtom';
import { AppLanguages } from './constants';
import { LocalesEn } from './globalEn';
import { LocalesUa } from './globalUa';

type LocalesType = keyof typeof LocalesUa | keyof typeof LocalesEn;

export const locales = (key: LocalesType): string => {
  const [appLocale] = useAtom(appLocaleAtom);
  return (appLocale === AppLanguages.EN ? LocalesEn : LocalesUa)[key];
};
