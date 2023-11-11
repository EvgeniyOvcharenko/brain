import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGBuildingColumns: ISvgIcon = ({ color, size, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
      <Path
        clipRule="evenodd"
        d="M6.025 9.95h-2c-.4 0-.8-.3-1-.7-.1-.5.1-.9.5-1.1l8-5c.4-.2.8-.2 1.1 0l8 5c.3.2.5.7.4 1.1-.2.4-.6.7-1 .7h-2v6h1c.6 0 1 .4 1 1s-.4 1-1 1h-14c-.6 0-1-.4-1-1s.4-1 1-1h1v-6zm2 0v6h3v-6h-3zm5 6h3v-6h-3v6zm3.5-8l-4.5-2.8-4.5 2.8h9z"
        fill={color}
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M3 18.95h18c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export { SVGBuildingColumns };
