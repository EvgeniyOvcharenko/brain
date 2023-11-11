import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGFilter: ISvgIcon = ({ size, color, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
      <Path
        clipRule="evenodd"
        d="M2.91 4.15a.833.833 0 01.756-.484h16.667a.833.833 0 01.636 1.372l-6.47 7.65V19.5a.833.833 0 01-1.205.745L9.96 18.578a.833.833 0 01-.46-.745v-5.145l-6.47-7.65a.833.833 0 01-.12-.889zm2.552 1.183l5.507 6.512c.128.15.197.341.197.538v4.935l1.667.833v-5.768c0-.197.07-.387.197-.538l5.507-6.512H5.462z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export { SVGFilter };
