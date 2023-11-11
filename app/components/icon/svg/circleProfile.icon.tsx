import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGCircleProfile: ISvgIcon = ({ size, color, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 32 32" width={size}>
      <Path
        clipRule="evenodd"
        d="M16.5 16a4.667 4.667 0 100-9.333 4.667 4.667 0 000 9.333zm0-2.667a2 2 0 100-4 2 2 0 000 4zM22.276 23.332v.001a9.29 9.29 0 01-5.775 2 9.293 9.293 0 01-5.776-2l-.001-.001c-.479-.378-.92-.8-1.315-1.264a1.128 1.128 0 010-1.47 9.391 9.391 0 011.315-1.263v-.002a9.29 9.29 0 015.775-2c2.181 0 4.187.748 5.776 2v.002c.48.377.92.8 1.316 1.263a1.128 1.128 0 010 1.47 9.388 9.388 0 01-1.315 1.264zM20.5 21.333A6.634 6.634 0 0016.5 20a6.633 6.633 0 00-4.001 1.333 6.635 6.635 0 004.001 1.334 6.633 6.633 0 004-1.334z"
        fill={color}
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M29.833 16c0 7.364-5.97 13.333-13.333 13.333-7.364 0-13.333-5.97-13.333-13.333 0-7.364 5.97-13.333 13.333-13.333 7.364 0 13.333 5.97 13.333 13.333zm-2.666 0c0 5.891-4.776 10.667-10.667 10.667S5.833 21.89 5.833 16 10.61 5.333 16.5 5.333 27.167 10.11 27.167 16z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export { SVGCircleProfile };
