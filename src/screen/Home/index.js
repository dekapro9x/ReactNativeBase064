import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAppType } from "../../const/TypeFontFamily";
import { ContextContainer } from "../../context/AppContext";
import { AppContainer } from "../../element/AppContainer";
import { AppIcon } from "../../element/AppIcon";
import AppSettingScreen from "../../element/AppSetting";
import { AppText } from "../../element/AppText";
import { keyNavigation } from "../../navigation/KeyNavigations";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";
import ServiceAppModalContent from "../../services/ServiceAppModalContent";

export default function Home({ navigation, router }) {
  const { colorApp } = useContext(ContextContainer);
  const navigateToScreen = () => {
    // navigation.navigate(keyNavigation.BASIC_JS);
    navigation.navigate(keyNavigation.BASIC_TS);
  };
  const btnSetting = () => {
    return (
      <TouchableOpacity
        onPress={pressSeting}
        style={styles.touchConfigColorApp}
      >
        <AppIcon type="Ionicons" name="settings" iconSize={25} color="black" />
      </TouchableOpacity>
    );
  };
  const pressSeting = () => {
    ServiceAppModalContent.showModal(<AppSettingScreen />);
  };
  return (
    <AppContainer
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
      rightHeaderComponent={btnSetting()}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: colorApp.backgroundColor }
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
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
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
