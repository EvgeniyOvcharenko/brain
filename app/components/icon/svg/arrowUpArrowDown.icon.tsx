import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGArrowUpArrowDown: ISvgIcon = ({ color, size, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
      <Path
        clipRule="evenodd"
        d="M18.029 18.796l1.818-1.819a1 1 0 011.414 1.414l-3.252 3.253a1.4 1.4 0 01-1.98 0l-3.253-3.253a1 1 0 111.414-1.414l1.839 1.839V2.996a1 1 0 112 0v15.8zM8.029 5.325l1.838 1.839a1 1 0 101.414-1.414L8.03 2.497a1.4 1.4 0 00-1.98 0L2.796 5.75A1 1 0 004.21 7.164L6.03 5.345v15.652a1 1 0 102 0V5.325z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export { SVGArrowUpArrowDown };
