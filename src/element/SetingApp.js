import React from "react";
import { View, Text } from "react-native";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { ColorPicker } from "react-native-color-picker";
export default function SetingApp() {
  const settingBackGround = () => {
    return (
      <ColorPicker
        onColorSelected={color => alert(`Color selected: ${color}`)}
        style={{ flex: 1 }}
      />
    );
  };
  return (
    <View
      style={{
        height: SizeRpScreen.height(100),
        width: SizeRpScreen.width(100)
      }}
    >
      {settingBackGround()}
    </View>
  );
}
