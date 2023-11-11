import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

export const SVGDiamondExclamation: ISvgIcon = ({
  size,
  color,
  style,
}) => {
  return (
    <Svg
      fill="none"
      height={size}
      style={style}
      viewBox="0 0 24 24"
      width={size}
    >
      <Path
        d="M12 7.5c-.6 0-1 .48-1 1.2v3.6c0 .72.4 1.2 1 1.2s1-.48 1-1.2V8.7c0-.72-.4-1.2-1-1.2zM12 14.5c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M11.3 2.3c.2-.2.4-.3.7-.3.3 0 .5.1.7.3l9 9c.4.4.4 1 0 1.4l-9 9c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3l-9-9c-.4-.4-.4-1 0-1.4l9-9zm8.3 9.8L12 4.5 4.4 12l7.6 7.6 7.6-7.5z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};
