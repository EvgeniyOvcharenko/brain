import { atomWithStorage } from 'jotai/utils'
import { ThemeType } from '../types/themeTypes'
import { AppLanguages } from '../locales/constants'

export const appThemeAtom = atomWithStorage('appTheme', ThemeType.LIGHT)

export const appLocaleAtom = atomWithStorage('appLocale', AppLanguages.EN)