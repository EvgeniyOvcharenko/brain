import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { ISvgIcon } from '.';

export const SVGRadioButtonUnselected: ISvgIcon = ({ size, color = '#EEEEEF', style, stroke = '#D0D0D3' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <Circle cx={12} cy={12} r={11.5} fill={color} stroke={stroke} />
    </Svg>
  );
};
