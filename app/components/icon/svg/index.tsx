import { StyleProp, TextStyle } from 'react-native';
import { SVGLogoBrain } from './logoBrain';
import { SVGBuildingColumns } from './buildingColumns';
import { SVGChevronLeft } from './chevronLeft.icon';

export type ISvgIcon = React.FC<{
  color: string;
  size: number;
  stroke?: string;
  style?: StyleProp<TextStyle>;
}>;
// https://transform.tools/svg-to-react-native
// https://react-svgr.com/playground/?native=true
export const svgIcons: Record<string, ISvgIcon | undefined> = {
  buildingColumns: SVGBuildingColumns,
  chevronLeft: SVGChevronLeft,
  logoBrain: SVGLogoBrain,
};
