export enum Fonts {
  LIGHT = "GTWalsheim-Light",
  REGULAR = "GTWalsheim",
  MEDIUM = "GTWalsheim-Medium",
  BOLD = "GTWalsheim-Bold",
  MICRO_LIGHT = "SuisseIntl-Light",
  MICRO = "SuisseIntl-Regular",
  MICRO_MEDIUM = "SuisseIntl-Medium",
  MICRO_SEMI_BOLD = "SuisseIntl-SemiBold",
  MICRO_BOLD = "SuisseIntl-Bold",
  MONO = "B612Mono-Regular",
  NUMBERS_LIGHT = "GTWalsheim-Light",
}

export type IFontFamilyTypes = keyof typeof Fonts;
