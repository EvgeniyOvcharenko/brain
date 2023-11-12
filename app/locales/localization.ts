import { AppLanguages } from "./constants";
import { LocalesEn } from "./globalEn";
import { LocalesUa } from "./globalUa";
import LocalizedStrings from "react-native-localization";

export const locales = new LocalizedStrings({
  [AppLanguages.EN]: {
    ...LocalesEn,
  },
  [AppLanguages.UA]: {
    ...LocalesUa,
  },
});
