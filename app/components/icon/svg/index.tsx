import { StyleProp, TextStyle } from 'react-native';
import { SVGArrowUpArrowDown } from './arrowUpArrowDown.icon';
import { SVGBell } from './bell.icon';
import { SVGBoltLightning } from './boltLightning';
import { SVGBuildingColumns } from './buildingColumns';
import { SVGCalendarWithCheck } from './calendarWithCheck.icon';
import { SVGChat } from './chat';
import { SVGChevronLeft } from './chevronLeft.icon';
import { SVGCircleProfile } from './circleProfile.icon';
import { SVGDiamondExclamation } from './diamondExclamation.icon';
import { SVGDocumentChartPie } from './documentChartPie';
import { SVGEditHollow } from './editHollow.icon.tsx';
import { SVGFileSearch } from './fileSearch.icon';
import { SVGFilter } from './filter.icon';
import { SVGPhone } from './phone';
import { SVGRadioButtonSelected } from './radioButtonSelected.icon';
import { SVGRadioButtonUnselected } from './radioButtonUnselected.icon';
import { SVGShareArrowUpRight } from './shareArrowUpRight.icon';
import { SVGTerminal } from './terminal.icon';
import { SVGLogoBrain } from './logoBrain';

export type ISvgIcon = React.FC<{
  color: string;
  size: number;
  stroke?: string;
  style?: StyleProp<TextStyle>;
}>;
// https://transform.tools/svg-to-react-native
// https://react-svgr.com/playground/?native=true
export const svgIcons: Record<string, ISvgIcon | undefined> = {
  terminal: SVGTerminal,
  fileSearch: SVGFileSearch,
  diamondExclamation: SVGDiamondExclamation,
  bell: SVGBell,
  editHollow: SVGEditHollow,
  arrowUpArrowDown: SVGArrowUpArrowDown,
  radioButtonUnselected: SVGRadioButtonUnselected,
  radioButtonSelected: SVGRadioButtonSelected,
  circleProfile: SVGCircleProfile,
  documentChartPie: SVGDocumentChartPie,
  filter: SVGFilter,
  chat: SVGChat,
  phone: SVGPhone,
  boltLightning: SVGBoltLightning,
  buildingColumns: SVGBuildingColumns,
  calendarWithCheck: SVGCalendarWithCheck,
  chevronLeft: SVGChevronLeft,
  shareArrowUpRight: SVGShareArrowUpRight,
  logoBrain: SVGLogoBrain,
};
