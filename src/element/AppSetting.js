import React, { useContext } from "react";
import { View, LogBox, Alert } from "react-native";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { ColorPicker } from "react-native-color-picker";
import { ContextContainer } from "../context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DebounceButton } from "./DebounceButton";
import ServiceAppAlertModal from "../services/ServiceAppModalContent";
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
          ServiceAppAlertModal.hideModal();
          setAppData(defineDataConfigNew);
        }}
        style={{ flex: 1 }}
      />
    );
  };

  const pressRemoveDataLocal = () => {
    Alert.alert(
      `Xóa toàn bộ dữ liệu ứng dụng`,
      "Bạn có đồng ý?",
      [
        {
          text: "Quay lại",
          style: "cancel"
        },
        {
          text: "Đồng ý",
          style: "cancel",
          onPress: async () => {
            try {
              await AsyncStorage.clear();
            } catch (error) {
              Alert.alert("", "Lỗi xóa dữ liệu!");
            }
            ServiceAppAlertModal.hideModal();
            Alert.alert("Đã xóa dữ liệu", "Xóa dữ liệu ứng dụng thành công!");
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View
      style={{
        height: SizeRpScreen.height(70),
        width: SizeRpScreen.width(100),
        backgroundColor: "transparent"
      }}
    >
      {settingBackGround()}
      <View style={{ with: SizeRpScreen.width(100), alignItems: "center" }}>
        <DebounceButton
          useDelay={true}
          onPress={pressRemoveDataLocal}
          loadingColor="#FFFFFF"
          title={"Xóa dữ liệu App khôi phục cài đặt gốc!"}
          textStyle={{
            color: "#FFFFFF",
            fontSize: SizeRpScreen.H5 * 1.2,
            fontWeight: "bold",
            textAlign: "center"
          }}
          style={{
            backgroundColor: "#06B050",
            justifyContent: "center",
            alignItems: "center"
          }}
        />
      </View>
    </View>
  );
}
