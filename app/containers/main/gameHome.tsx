import React from 'react';
import { View } from 'react-native';
import { TextElement } from '../../components/textElement/textElement';
import { locales } from '../../locales/localization';

export const GameHome = () => {
  return (
    <View>
      <TextElement colorVariant="primary" variant="h1">
        {locales('TAB_GAME_TITLE')}
      </TextElement>
    </View>
  );
};
