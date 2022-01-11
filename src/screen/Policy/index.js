import React, { useContext, useEffect, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { black, deepPurpleA400 } from "../../const/Color";
import { FontAppType } from "../../const/TypeFontFamily";
import { ContextContainer } from "../../context/AppContext";
import { AppContainer } from "../../element/AppContainer";
import AppTextTicker from "../../element/AppTextTicker";
import { DebounceButton } from "../../element/DebounceButton";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";

function Policy({ navigation, router }) {
  const { colorApp } = useContext(ContextContainer);
  useLayoutEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {}, []);

  const pressAgreePolicy = () => {};

  const renderContent = () => {
    return (
      <View style={styles.container}>
        <AppTextTicker
          style={{
            fontSize: 12,
            color: black,
            fontFamily: FontAppType.Happy
          }}
          duration={12000}
          loop
          bounce
          repeatSpacer={100}
          marqueeDelay={0}
        >
          Made by BeoTran ( Contact: dekapro9x@gmail.com - 0962294434 )
        </AppTextTicker>
        {/* Khung ô vuông */}
        <View
          style={{
            flex: 1,
            width: SizeRpScreen.width(98),
            borderWidth: SizeRpScreen.width(2),
            borderColor: deepPurpleA400
          }}
        />
        {/* Nút đồng ý điều khoản sử dụng */}
        <DebounceButton
          useDelay={true}
          onPress={pressAgreePolicy}
          loadingColor="#FFFFFF"
          title={"Tôi đồng ý với điều khoản sử dụng"}
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
    );
  };

  return (
    <AppContainer
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
      style={{ backgroundColor: colorApp.backgroundColor }}
    >
      {renderContent()}
    </AppContainer>
  );
}
export default React.memo(Policy);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SizeRpScreen.width(100),
    alignItems: "center"
  }
});
