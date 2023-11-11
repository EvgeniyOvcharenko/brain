import { I18nManager, Platform } from "react-native";
import { css } from "styled-components/native";
import DeviceUiInfo from "../../core/deviceInfo";
import { Fonts } from "../../styles/fonts/text.fonts";

const BUTTON_TEXT_VARIANTS = {
  "button-xxs": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(11)}px;
    line-height: ${`${DeviceUiInfo.moderateScale(
      11 * (I18nManager.isRTL ? 1.5 : 1.35)
    )}px`};
    font-weight: 500;
    letter-spacing: 0;
  `,
  "button-xs": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(12)}px;
    line-height: ${`${DeviceUiInfo.moderateScale(
      12 * (I18nManager.isRTL ? 1.5 : 1.35)
    )}px`};
    font-weight: 500;
    letter-spacing: 0;
  `,
  "button-small": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(14)}px;
    line-height: ${`${DeviceUiInfo.moderateScale(
      14 * (I18nManager.isRTL ? 1.5 : 1.35)
    )}px`};
    font-weight: 500;
    letter-spacing: 0;
  `,
  button: css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(16)}px;
    line-height: ${`${DeviceUiInfo.moderateScale(
      16 * (I18nManager.isRTL ? 1.5 : 1.35)
    )}px`};
    font-weight: 500;
    letter-spacing: 0;
  `,
};

export const AMOUNT_TEXT_VARIANTS = {
  "amount-s": css`
    font-family: ${(props) => props.theme.fonts.amountMedium};
    font-size: ${DeviceUiInfo.moderateScale(16)}px;
    line-height: ${DeviceUiInfo.moderateScale(20)}px;
    font-weight: 500;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(16) * 0.01}px;
  `,
  "amount-m": css`
    font-family: ${(props) => props.theme.fonts.amountMedium};
    font-size: ${DeviceUiInfo.moderateScale(18)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: 500;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(18) * 0.01}px;
  `,
  "amount-l": css`
    font-family: ${(props) => props.theme.fonts.amountMedium};
    font-size: ${DeviceUiInfo.moderateScale(28)}px;
    line-height: ${DeviceUiInfo.moderateScale(40)}px;
    font-weight: 500;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(28) * 0.01}px;
  `,
  "amount-xl": css`
    font-family: ${(props) => props.theme.fonts.amountMedium};
    font-size: ${DeviceUiInfo.moderateScale(32)}px;
    line-height: ${DeviceUiInfo.moderateScale(40)}px;
    font-weight: 500;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(32) * 0.01}px;
  `,
  "amount-xxl": css`
    font-family: ${(props) => props.theme.fonts.amountMedium};
    font-size: ${DeviceUiInfo.moderateScale(36)}px;
    line-height: ${DeviceUiInfo.moderateScale(48)}px;
    font-weight: 500;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(36) * 0.01}px;
  `,
  "amount-xxxl": css`
    font-family: ${(props) => props.theme.fonts.amountMedium};
    font-size: ${DeviceUiInfo.moderateScale(48)}px;
    line-height: ${DeviceUiInfo.moderateScale(56)}px;
    font-weight: 400;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(48) * 0.01}px;
  `,
};

export const VARIANTS = {
  "paragraph-xs": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(12)}px;
    line-height: ${DeviceUiInfo.moderateScale(16)}px;
    font-weight: 400;
    letter-spacing: 0;
  `,
  "paragraph-xs-medium": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(12)}px;
    line-height: ${DeviceUiInfo.moderateScale(16)}px;
    font-weight: 500;
    letter-spacing: 0;
  `,
  "paragraph-small": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(14)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: 400;
    letter-spacing: 0;
  `,
  "paragraph-small-medium": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(14)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: 500;
    letter-spacing: 0;
  `,
  paragraph: css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(16)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: 400;
    letter-spacing: 0;
  `,
  "paragraph-medium": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(16)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: 500;
    letter-spacing: 0;
  `,
  "paragraph-large": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(18)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: 400;
  `,
  "paragraph-large-medium": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(18)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: 500;
  `,
  micro: css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(12)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: 500;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(12) * 0.02}px;
  `,
  "micro-xs": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(12)}px;
    line-height: ${DeviceUiInfo.moderateScale(16)}px;
    font-weight: 400;
    letter-spacing: 0;
  `,
  "micro-xs-med": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(12)}px;
    line-height: ${DeviceUiInfo.moderateScale(16)}px;
    font-weight: 500;
    letter-spacing: 0;
  `,
  "app-h1": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(28)}px;
    line-height: ${DeviceUiInfo.moderateScale(40)}px;
    font-weight: 400;
    letter-spacing: 0;
  `,
  "app-h1-medium": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(28)}px;
    line-height: ${DeviceUiInfo.moderateScale(40)}px;
    font-weight: 500;
    letter-spacing: 0;
  `,
  "app-h2": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(24)}px;
    line-height: ${I18nManager.isRTL
      ? DeviceUiInfo.moderateScale(38)
      : DeviceUiInfo.moderateScale(32)}px;
    font-weight: 400;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(28) * 0.002}px;
  `,
  "app-h2-medium": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(24)}px;
    line-height: ${DeviceUiInfo.moderateScale(32)}px;
    font-weight: 500;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(28) * 0.002}px;
  `,
  h1: css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(42)}px;
    line-height: ${DeviceUiInfo.moderateScale(48)}px;
    font-weight: 500;
    letter-spacing: 0;
  `,
  h2: css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(28)}px;
    line-height: ${DeviceUiInfo.moderateScale(28 * 1.5)}px;
    font-weight: 500;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(28) * 0.02}px;
  `,
  h3: css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(24)}px;
    line-height: ${DeviceUiInfo.moderateScale(32)}px;
    font-weight: 500;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(24) * 0.02}px;
  `,
  h4: css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(18)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: 400;
    letter-spacing: 0;
  `,
  "h4-medium": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(18)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: 500;
    letter-spacing: 0;
  `,
  h5: css`
    font-family: ${Fonts.BOLD};
    font-size: ${DeviceUiInfo.moderateScale(14)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: ${Platform.OS === "ios" ? 700 : 600};
    letter-spacing: 0;
  `,
  mono: css`
    font-family: ${Fonts.MONO};
    font-size: ${DeviceUiInfo.moderateScale(16)}px;
    line-height: ${DeviceUiInfo.moderateScale(16)}px;
    font-weight: 400;
    letter-spacing: 0;
  `,
  "mobile-h1": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(36)}px;
    line-height: ${DeviceUiInfo.moderateScale(I18nManager.isRTL ? 56 : 40)}px;
    font-weight: 500;
    letter-spacing: 0;
  `,
  "mobile-h2": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(28)}px;
    line-height: ${DeviceUiInfo.moderateScale(32)}px;
    font-weight: 500;
    letter-spacing: ${I18nManager.isRTL
      ? 0
      : DeviceUiInfo.moderateScale(28) * 0.002}px;
  `,
  "mobile-h4": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(20)}px;
    line-height: ${DeviceUiInfo.moderateScale(24)}px;
    font-weight: 500;
    letter-spacing: 0;
  `,
  "label-small": css`
    font-family: ${Fonts.REGULAR};
    font-size: ${DeviceUiInfo.moderateScale(12)}px;
    line-height: ${DeviceUiInfo.moderateScale(20)}px;
    font-weight: 500;
    letter-spacing: 0;
  `,
  ...BUTTON_TEXT_VARIANTS,
  ...AMOUNT_TEXT_VARIANTS,
};
