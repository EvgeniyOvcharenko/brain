import React, { FC, useState } from "react";
import {
  Alert,
  Animated,
  I18nManager,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { themeColors } from "../styles/theme/theme";
import { useGetCustomTheme } from "../styles/theme/hooks";

const CONTENT_WIDTH = 235;
const SID_BUTTON_WIDTH = 18;
const BORDER_RADIUS = 10;

const DevMenu: FC = () => {
  if (!__DEV__) return null;
  const { currentTheme, toggleTheme } = useGetCustomTheme();
  const animValue = React.useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [isOpen, setIsOpen] = useState(false);

  const isRTL = I18nManager.isRTL;
  const isDark = currentTheme === "dark";

  const toggle = () => {
    Animated.timing(animValue, {
      toValue: !isOpen ? CONTENT_WIDTH : 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setIsOpen((value) => !value));
  };

  const hello = () => {
    Alert.alert("Hello");
  };

  const renderButton = (action: () => void, text: string) => {
    return (
      <TouchableOpacity
        style={{
          borderColor: "red",
          borderWidth: 2,
          padding: 10,
          backgroundColor: themeColors.blue,
        }}
        onPress={action}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View
      style={[
        styles.container,
        isRTL ? styles.containerRTL : styles.containerLTR,
        { transform: [{ translateX: animValue.x }] },
      ]}
    >
      <View
        style={[
          styles.contentBox,
          isRTL ? styles.contentBoxRTL : styles.contentBoxLTR,
        ]}
      >
        <View
          style={[
            styles.switch,
            { flexDirection: isRTL ? "row-reverse" : "row" },
          ]}
        >
          <Text
            style={{ color: isDark ? themeColors.white : themeColors.dark }}
          >
            {currentTheme.toUpperCase()}
          </Text>
          <Switch
            trackColor={{ true: themeColors.error, false: themeColors.error }}
            thumbColor={themeColors.blue}
            value={isDark}
            onValueChange={toggleTheme}
          />
        </View>
        {renderButton(hello, "Click me")}
      </View>
      <TouchableOpacity
        style={[
          styles.sidButton,
          isRTL ? styles.sidButtonRTL : styles.sidButtonLTR,
        ]}
        onPress={toggle}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: CONTENT_WIDTH + SID_BUTTON_WIDTH,
    bottom: 94,
  },
  containerLTR: {
    left: -CONTENT_WIDTH,
    paddingRight: SID_BUTTON_WIDTH,
  },
  containerRTL: {
    right: -CONTENT_WIDTH,
    paddingLeft: SID_BUTTON_WIDTH,
  },
  contentBox: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  contentBoxLTR: {
    borderLeftWidth: 0,
    borderTopRightRadius: BORDER_RADIUS,
  },
  contentBoxRTL: {
    borderRightWidth: 0,
    borderTopLeftRadius: BORDER_RADIUS,
  },
  switch: {
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  button: {
    justifyContent: "center",
    marginVertical: 10,
  },
  sidButton: {
    position: "absolute",
    width: SID_BUTTON_WIDTH,
    height: SID_BUTTON_WIDTH * 4,
    bottom: 0,
    backgroundColor: "red",
  },
  sidButtonLTR: {
    left: CONTENT_WIDTH,
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  sidButtonRTL: {
    right: CONTENT_WIDTH,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
});

export default DevMenu;
