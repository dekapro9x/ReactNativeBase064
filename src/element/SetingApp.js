import React, { useContext } from "react";
import { View } from "react-native";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { ColorPicker } from "react-native-color-picker";
import { ContextContainer } from "../context/AppContext";

export default function SetingApp() {
  const { setAppData } = useContext(ContextContainer);
  const settingBackGround = () => {
    return (
      <ColorPicker
        onColorSelected={colorSelect => {
          const defineDataConfigNew = {
            colorApp: {
              backgroundColor: colorSelect
            }
          };
          setAppData(defineDataConfigNew);
          alert(`Color selected: ${colorSelect}`);
        }}
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
