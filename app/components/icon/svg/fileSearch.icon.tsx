import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGFileSearch: ISvgIcon = ({
  size, 
  color, 
  style 
}) => {
  return (
    <Svg
      fill="none"
      height={size}
      style={style}
      viewBox="0 0 16 16"
      width={size}
    >
      <Path
        clipRule="evenodd"
        d="M4 .667a2 2 0 00-2 2v2a.667.667 0 001.333 0v-2A.667.667 0 014 2h4.667v3.333c0 .369.298.667.666.667h3.334v7.333A.667.667 0 0112 14H2.667a.667.667 0 000 1.333H12a2 2 0 002-2V5a.666.666 0 00-.195-.471L10.138.862a.667.667 0 00-.471-.195H4zm6 1.942v2.058h2.057L10 2.609z"
        fill={color}
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M1.448 7.448a2.667 2.667 0 014.182 3.24l.841.84a.667.667 0 11-.942.943l-.841-.84A2.659 2.659 0 013.333 12a2.667 2.667 0 01-1.885-4.552zM3.333 8a1.333 1.333 0 100 2.667 1.333 1.333 0 000-2.667z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export {
  SVGFileSearch,
};
