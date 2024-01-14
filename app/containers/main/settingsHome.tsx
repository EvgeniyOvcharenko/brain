import React, { FC } from 'react';
import { Button, View } from 'react-native';
import { HomeStackProps } from '../../navigation/home.routes';

export const SettingsHome: FC<HomeStackProps> = ({ navigation }) => {
  return (
    <View>
      <Button title="Back to Brain" onPress={() => navigation.navigate('GameHome')} />
    </View>
  );
};
