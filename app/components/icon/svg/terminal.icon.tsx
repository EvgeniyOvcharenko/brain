import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGTerminal: ISvgIcon = ({
  size, 
  color, 
  style,
}) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 17 16" width={size}>
      <Path
        d="M4.694 4.195c.26-.26.683-.26.943 0L6.97 5.53c.26.26.26.682 0 .943L5.637 7.805a.667.667 0 11-.943-.943L5.556 6l-.862-.862a.667.667 0 010-.943zM7.166 8.667c0-.368.298-.667.667-.667h2.666a.667.667 0 110 1.333H7.833a.667.667 0 01-.667-.666z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M3.832 1.333a2 2 0 00-2 2v9.334a2 2 0 002 2h9.333a2 2 0 002-2V3.333a2 2 0 00-2-2H3.832zm-.667 2c0-.368.299-.666.667-.666h9.333c.369 0 .667.298.667.667v9.333a.667.667 0 01-.667.667H3.832a.667.667 0 01-.667-.667V3.333z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export {
  SVGTerminal
};
