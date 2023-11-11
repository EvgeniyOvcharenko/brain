import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from './index';

const SVGDocumentChartPie: ISvgIcon = ({ size, color, style }) => {
  return (
    <Svg fill="none" height={size} style={style} viewBox="0 0 17 16" width={size}>
      <Path
        clipRule="evenodd"
        d="M3 11.334V2.667h6.667v2.916c.425-.131.872-.213 1.333-.24v-3.21a.8.8 0 00-.8-.8H2.467a.8.8 0 00-.8.8v9.734a.8.8 0 00.8.8h3.449a5.65 5.65 0 01-.24-1.333H3zM4.533 10a.2.2 0 01-.2-.2v-.933c0-.11.09-.2.2-.2h1.635c-.19.42-.33.866-.413 1.333H4.533zm3.585-3.667c-.528.365-.99.816-1.368 1.334H4.533a.2.2 0 01-.2-.2v-.933c0-.111.09-.2.2-.2h3.585zm.015-1a.2.2 0 00.2-.2V4.2a.2.2 0 00-.2-.2h-3.6a.2.2 0 00-.2.2v.933c0 .11.09.2.2.2h3.6zm2.534 2.17c0-.456.375-.858.87-.835a4.334 4.334 0 014.125 4.125.833.833 0 01-.835.87h-3.321a.84.84 0 01-.84-.84v-3.32zM12 8.07v2.259h2.26A3.005 3.005 0 0012 8.07zm-2.139-.5c.204.307.12.721-.186.925a3 3 0 104.159 4.159.667.667 0 011.11.738 4.333 4.333 0 11-6.007-6.007.667.667 0 01.924.186z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export { SVGDocumentChartPie };
