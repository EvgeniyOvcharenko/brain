import {} from 'styled-components';
import { IMyTheme } from '../../types/themeTypes';
declare module 'styled-components' {
  export interface DefaultTheme extends IMyTheme {}
}