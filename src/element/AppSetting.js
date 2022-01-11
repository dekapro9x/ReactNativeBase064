import React, { useContext } from "react";
import { View, LogBox } from "react-native";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { ColorPicker } from "react-native-color-picker";
import { ContextContainer } from "../context/AppContext";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
export default function SetingApp() {
  const { appData, setAppData } = useContext(ContextContainer);
  const settingBackGround = () => {
    return (
      <ColorPicker
        onColorSelected={colorSelect => {
          const defineDataConfigNew = {
            ...appData,
            colorApp: {
              backgroundColor: colorSelect
            }
          };
          setAppData(defineDataConfigNew);
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
