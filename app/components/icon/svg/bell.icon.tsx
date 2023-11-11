import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGBell: ISvgIcon = ({ size, color, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
      <Path
        clipRule="evenodd"
        d="M13.016 2.982c3.42.553 5.925 3.83 5.925 7.518v3.425l1.668 2.809A1.5 1.5 0 0119.32 19H4.673a1.5 1.5 0 01-1.28-2.281l1.647-2.7V10.5c0-3.788 2.51-6.981 5.925-7.52.009-.589.417-.98 1.026-.98.61 0 1.018.392 1.026.982zM7.039 10.5c0-3.242 2.31-5.6 4.95-5.6 2.633 0 4.952 2.448 4.952 5.6v3.563c0 .27.073.534.21.766L18.441 17H5.563l1.256-2.06a1.5 1.5 0 00.22-.78V10.5z"
        fill={color}
        fillRule="evenodd"
      />
      <Path
        d="M12 22a2 2 0 001.938-1.505c.069-.268-.162-.495-.438-.495h-3c-.276 0-.506.227-.438.495A2 2 0 0012 22z"
        fill={color}
      />
    </Svg>
  );
};

export { SVGBell };
