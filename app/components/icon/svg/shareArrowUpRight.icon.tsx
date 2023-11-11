import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGShareArrowUpRight: ISvgIcon = ({ size, color, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
      <Path
        clipRule="evenodd"
        d="M20,24H0V4h11v2H2v16h16v-9h2V24z M12.7,12.7l-1.4-1.4L20.6,2H14V0h10v10h-2V3.4L12.7,12.7z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export { SVGShareArrowUpRight };
