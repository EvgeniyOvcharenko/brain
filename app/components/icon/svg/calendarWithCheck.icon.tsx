import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from '.';

const SVGCalendarWithCheck: ISvgIcon = ({ size, color, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 20 20" width={size}>
      <Path
        d="M13.09 12.256a.833.833 0 1 0-1.18-1.178l-2.743 2.744-1.078-1.078a.833.833 0 0 0-1.178 1.179l1.666 1.666a.833.833 0 0 0 1.179 0l3.333-3.333Z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M13.333.833c.46 0 .834.373.834.834V2.5h1.666a2.5 2.5 0 0 1 2.5 2.5v11.667a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V5a2.5 2.5 0 0 1 2.5-2.5h1.666v-.833a.833.833 0 1 1 1.667 0V2.5h5v-.833c0-.46.373-.834.833-.834ZM16.667 5v2.5H3.333V5c0-.46.374-.833.834-.833h1.666V5A.833.833 0 1 0 7.5 5v-.833h5V5a.833.833 0 1 0 1.667 0v-.833h1.666c.46 0 .834.373.834.833Zm0 4.167H3.333v7.5c0 .46.374.833.834.833h11.666c.46 0 .834-.373.834-.833v-7.5Z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};
export { SVGCalendarWithCheck };
