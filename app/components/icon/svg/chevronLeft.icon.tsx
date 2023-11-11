import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGChevronLeft: ISvgIcon = ({ color, size, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
      <Path
        clipRule="evenodd"
        d="M14.5 22a1 1 0 01-.71-.29l-9-9a1 1 0 010-1.42l9-9a1 1 0 111.42 1.42L6.91 12l8.3 8.29a1 1 0 010 1.42 1 1 0 01-.71.29z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export { SVGChevronLeft };
