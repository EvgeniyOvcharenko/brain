import { I18nManager, TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import DeviceUiInfo from '../../core/deviceInfo';
import { VARIANTS } from './textElement.constants';
import { TextColorVariants, themeColors } from '../../styles/theme/theme';
import { Fonts, IFontFamilyTypes } from '../../styles/fonts/text.fonts';

export type TTextElementVariant = keyof typeof VARIANTS;

export interface ITextElementProps extends TextProps {
  color?: string;
  colorVariant?: TextColorVariants;
  disabled?: boolean;
  fontFamily?: string;
  fontFamilyType?: IFontFamilyTypes;
  fontSize?: number;
  fontWeight?: number;
  forceAr?: boolean;
  forceEng?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
  variant?: TTextElementVariant;
}

export const TextElement = styled.Text<ITextElementProps>`
  text-align: left;
  color: ${(props) => {
    return getTextColor(props);
  }};
  ${(props) => {
    const { variant, fontSize, lineHeight, letterSpacing, fontFamily, fontWeight } = props;
    if (variant) {
      return VARIANTS[variant];
    }
    const _fontFamily = fontFamily ? fontFamily : Fonts.REGULAR;
    const _fontSize = DeviceUiInfo.moderateScale(fontSize || 16) + 'px';
    const _letterSpacing = DeviceUiInfo.moderateScale(letterSpacing || 0);
    const _lineHeight = DeviceUiInfo.moderateScale(lineHeight || 24) + 'px';

    return css`
      font-family: ${_fontFamily};
      font-size: ${_fontSize};
      font-weight: ${fontWeight || 400};
      line-height: ${_lineHeight};
      letter-spacing: ${I18nManager.isRTL ? 0 : _letterSpacing}px;
    `;
  }};
`;

const getTextColor = (props: {
  color?: string;
  colorVariant?: TextColorVariants;
  disabled?: boolean;
}) => {
    if(props.disabled) {
      return themeColors.grey;
    }
    return props.colorVariant || props.color || themeColors.black;
  
};

