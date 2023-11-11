import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGChat: ISvgIcon = ({ size, color, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
      <Path
        clipRule="evenodd"
        d="M6 7.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-1zM6 11.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-1z"
        fill={color}
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M2 3a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H8.783a1 1 0 00-.524.148l-4.735 2.914A1 1 0 012 20.21V3zm2 15.42V4h16v12H8.783a3 3 0 00-1.572.445L4 18.421z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export { SVGChat };
