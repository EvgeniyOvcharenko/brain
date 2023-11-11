import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGEditHollow: ISvgIcon = ({ color, size, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 16 16" width={size}>
      <Path
        clipRule="evenodd"
        d="M11.787 1.528a.67.67 0 00-.945 0L2.95 9.39a.665.665 0 00-.169.282l-1.086 3.67a.667.667 0 00.83.826l3.684-1.082a.67.67 0 00.283-.168l7.893-7.86a.664.664 0 000-.941l-2.598-2.588zm-.472 1.412L9.902 4.346l1.654 1.647 1.412-1.407-1.653-1.646zM4.717 9.51L8.96 5.286l1.653 1.647-4.243 4.225-1.653-1.646zm-.812 1.07l-.582 1.965 1.973-.58-1.391-1.385z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export { SVGEditHollow };
