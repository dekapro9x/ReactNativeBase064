import { black } from "@css/Color";
import PropTypes from "prop-types";
import React from "react";
import { Text } from "react-native";
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

AppText.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  fontFamily:PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

export { AppText };

