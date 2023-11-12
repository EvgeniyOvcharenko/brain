import React, { FC } from "react";
import { Button, View } from "react-native";
import { HomeStackProps } from "../../navigation/home.routes";
import { TextElement } from "../../components/textElement/textElement";
import { locales } from "../../locales/localization";

export const LevelsHome: FC<HomeStackProps> = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("GameHome");
  };
  return (
    <View>
      <TextElement>{locales.TAB_HOME_TITLE}</TextElement>
      <Button
        title="Back to Brain"
        onPress={onPress}
      />
    </View>
  );
};
