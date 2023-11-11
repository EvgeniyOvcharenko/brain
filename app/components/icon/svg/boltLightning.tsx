import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGBoltLightning: ISvgIcon = ({ color, size, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 12 20" width={size}>
      <Path
        clipRule="evenodd"
        d="M5.368 19.876A.9.9 0 014.675 19v-6.3h-3.15a.9.9 0 01-.818-1.275l4.95-10.8A.9.9 0 017.375 1v6.3h3.6a.9.9 0 01.805 1.303l-5.4 10.8a.9.9 0 01-1.012.473zM9.518 9.1H6.476a.9.9 0 01-.9-.9V5.124L2.928 10.9h2.647a.9.9 0 01.9.9v3.388L9.519 9.1z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export { SVGBoltLightning };
