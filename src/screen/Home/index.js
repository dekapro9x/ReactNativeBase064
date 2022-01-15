import { lightBlue800, lightBlueA700 } from "../../const/Color";
import { AppContainerScroll } from "@element/AppContainerScroll";
import React, { useContext, useRef, useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAppType } from "../../const/TypeFontFamily";
import { ContextContainer } from "../../context/AppContext";
import { AppIcon } from "../../element/AppIcon";
import AppSettingScreen from "../../element/AppSetting";
import { AppText } from "../../element/AppText";
import { keyNavigation } from "../../navigation/KeyNavigations";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";
import ServiceAppModalContent from "../../services/ServiceAppModalContent";


export default function Home({ navigation, router }) {
  const { colorApp } = useContext(ContextContainer);

  useEffect(() => {
    return () => { };
  }, []);

  const navigateToScreen = () => {
    navigation.navigate(keyNavigation.BASIC_TS);
  };

  const rightHeaderComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <TouchableOpacity
          onPress={pressElementRightHeader("JS_DefaultScreen")}
          style={styles.touchConfigColorApp}
        >
          <AppIcon
            type="AntDesign"
            name="twitter"
            iconSize={25}
            color={lightBlue800}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={pressElementRightHeader("TS_DefaultScreen")}
          style={styles.touchConfigColorApp}
        >
          <AppIcon
            type="AntDesign"
            name="facebook-square"
            iconSize={25}
            color={lightBlueA700}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={pressElementRightHeader("Setting")}
          style={styles.touchConfigColorApp}
        >
          <AppIcon
            type="Ionicons"
            name="settings"
            iconSize={25}
            color="black"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const pressElementRightHeader = keyActions => () => {
    switch (keyActions) {
      case "JS_DefaultScreen":
        navigation.navigate(keyNavigation.BASIC_JS);
        break;
      case "TS_DefaultScreen":
        navigation.navigate(keyNavigation.BASIC_TS);
        break;
      case "Setting":
        ServiceAppModalContent.showModal(<AppSettingScreen />);
        break;
    }
  };

  return (
    <AppContainerScroll
      useLinearGradient={false}
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
      rightHeaderComponent={rightHeaderComponent()}
    >
      <View
        style={[
          styles.container,
        ]}
      >
        <TouchableOpacity
          styles={{
            height: 45,
            width: 250,
            boderWidth: 1,
            boderRadius: 10,
            backgroundColor: "green"
          }}
          onPress={navigateToScreen}
        >
          <Text>HOME SCREEN</Text>
          <AppIcon type="Entypo" name="500px" iconSize={22} color="red" />
          <AppText fontFamily={FontAppType.MotoyaLMaru}>
            Test App Text Font
          </AppText>
          <AppText fontFamily={FontAppType.Champagne}>
            Test App Text Font
          </AppText>
          <AppText fontFamily={FontAppType.Happy}>Test App Text Font</AppText>
          <AppText fontFamily={FontAppType.HappyShadows}>
            Test App Text Font
          </AppText>
          <AppText fontFamily={FontAppType.LetterMagic}>
            Test App Text Font
          </AppText>
          <AppText fontFamily={FontAppType.Sun}>Test App Text Font</AppText>
          <AppText fontFamily={FontAppType.Blacklight}>
            Test App Text Font
          </AppText>
        </TouchableOpacity>
      </View>
    </AppContainerScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: SizeRpScreen.height(100) * 2
  },
  bnt_mid: {
    height: 45,
    width: 250,
    boderWidth: 1,
    boderRadius: 10,
    backgroundColor: "red"
  },
  imgHeader: {
    height: SizeRpScreen.width(50),
    width: SizeRpScreen.width(100),
    alignSelf: "center"
  },
  touchConfigColorApp: {
    flex: 1,
    width: 45,
    alignItems: "center",
    justifyContent: "center"
  }
});
