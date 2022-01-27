import React from "react";
import { Text } from "react-native";
import { black } from "@css/Color";
import { FontAppType } from "../const/TypeFontFamily";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { connect } from 'react-redux';
const AppTextLanguageI18n = props => {
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

export { AppTextLanguageI18n };

