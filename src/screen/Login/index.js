import { AppTextInput } from "@element/AppTextInput";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import { BEOTRAN_LOGGER } from "@util/Loger";
import React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { AppContainer } from "../../element/AppContainer";
import { keyNavigation } from "../../navigation/KeyNavigations";

export default function Login({ navigation, router }) {
  const navigateHome = () => {
    navigation.navigate(keyNavigation.HOME);
  };

  const onChangeText = (keyState, value) => {
    BEOTRAN_LOGGER(keyState, value);
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
