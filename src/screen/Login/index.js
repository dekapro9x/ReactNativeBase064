import { AppTextInput } from "@element/AppTextInput";
import { DebounceButton } from "@element/DebounceButton";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import { BEOTRAN_LOGGER } from "@util/Loger";
import React, { useRef } from "react";
import { Alert, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { AppContainer } from "../../element/AppContainer";
import { keyNavigation } from "../../navigation/KeyNavigations";

export default function Login({ navigation, router }) {
  const useName = useRef("");
  const passWord = useRef("");

  const navigateHome = () => {
    navigation.replace(keyNavigation.HOME);
  };

  const onChangeText = (keyState, value) => {
    switch (keyState) {
      case "UserName":
        useName.current = value;
        break;
      case "Password":
        passWord.current = value;
        break;
    }
  };

  const pressLogin = () => {
    if (validateAccount()) {
      navigateHome();
    }
  };

  const validateAccount = () => {
    BEOTRAN_LOGGER(useName.current, passWord.current);
    if (!useName.current) {
      Alert.alert("Đăng nhập không chính xác","Tài khoản là bắt buộc");
      return false;
    }
    if (!passWord.current) {
      Alert.alert("Đăng nhập không chính xác","Mật khẩu là bắt buộc");
      return false;
    }
    if (useName.current && passWord.current) {
      return true;
    }
  };

  const renderContent = () => {
    return (
      <LinearGradient
        colors={["#481E34", "#16192B"]}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={[styles.linearGradientContainer]}
      >
        <View style={[styles.containerContent]}>
          <AppTextInput
            useClean={true}
            keyState={"UserName"}
            titleTextInput={"UserName"}
            placeholder={"UserName"}
            styleContainer={{ width: SizeRpScreen.width(96) }}
            onChangeText={onChangeText}
          />
          <AppTextInput
            useClean={true}
            keyState={"Password"}
            titleTextInput={"Password"}
            placeholder={"Password"}
            styleContainer={{ width: SizeRpScreen.width(96) }}
            onChangeText={onChangeText}
          />
        </View>
        <DebounceButton
          useDelay={true}
          onPress={pressLogin}
          loadingColor="#FFFFFF"
          title={"Đăng nhập"}
          textStyle={{
            color: "#FFFFFF",
            fontSize: SizeRpScreen.H5 * 1.2,
            fontWeight: "bold",
            textAlign: "center"
          }}
          style={{
            backgroundColor: "#06B050",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center"
          }}
        />
      </LinearGradient>
    );
  };

  return (
    <AppContainer nameScreen={""} goBackScreen={false} flexWrapHeader>
      {renderContent()}
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  linearGradientContainer: {
    flex: 1
  }
});
