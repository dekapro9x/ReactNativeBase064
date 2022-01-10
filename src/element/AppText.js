import React from "react";
import { Text } from "react-native";
import { black } from "../const/Color";
import { FontAppType } from "../const/TypeFontFamily";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
const AppText = props => {
  const { children, style, onPress, fontFamily, color } = props;
  return (
    <Text
      {...props}
      style={[
        {
          fontSize: SizeRpScreen.H5,
          color: color || black,
          fontFamily: fontFamily || FontAppType.MotoyaLMaru
        },
        style
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

export { AppText };
