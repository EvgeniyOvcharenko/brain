import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { ISvgIcon } from '.';

export const SVGRadioButtonSelected: ISvgIcon = ({ size, color = '#EEEEEF', style, stroke = '#FA6428' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <Circle cx={12} cy={12} r={11} stroke={stroke} strokeWidth={2} />
      <Circle cx={12} cy={12} r={7} fill={color} />
    </Svg>
  );
};
