import React, { forwardRef } from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { svgIcons } from './svg';

/// https://transform.tools/svg-to-react-native

interface IProps {
  color?: string;
  containerStyle?: StyleProp<ViewStyle>;
  isActive?: boolean;
  name: TIconNames;
  size?: number;
  style?: StyleProp<TextStyle>;
}

export const Icon = forwardRef<View, IProps>((props, ref) => {
  const { color = '', isActive, size = 24, containerStyle, style, ...rest } = props;

  const FinalIcon = svgIcons[rest.name];

  if (ref || containerStyle) {
    return (
      <View collapsable={false} ref={ref} style={containerStyle}>
        {FinalIcon && <FinalIcon color={color} size={size} style={style} {...rest} />}
      </View>
    );
  }
  return FinalIcon && <FinalIcon color={color} size={size} style={style} {...rest} />;
});

export type { IProps as IIconProps };

export type TIconNames = keyof typeof svgIcons

