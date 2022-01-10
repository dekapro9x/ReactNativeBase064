import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import RNBootSplash from "react-native-bootsplash";
import LoadingProcess from "../../element/LoadingProcess";
import { keyNavigation } from "../../navigation/KeyNavigations";
//Config:
import { FontAppType } from "../../const/TypeFontFamily";
//Test element:
import { AppIcon } from "../../element/AppIcon";
import { AppText } from "../../element/AppText";
import { red, white } from "../../const/Color";
import { AppImage } from "../../element/AppImage";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";
import { ContextContainer } from "../../context/AppContext";

function AppIntro({ navigation, router }) {
  const sourceImg = "https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G";
  const [loading, setStateLoading] = useState(true);
  const { colorApp, setAppData } = useContext(ContextContainer);
  console.log("colorApp", colorApp, setAppData);
  useLayoutEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    hideSplahScreen();
  }, []);

  const stopLoadingStartAppIntro = () => {
    setStateLoading(false);
  };

  const hideSplahScreen = async () => {
    const init = async () => {};
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  };

  const navigateLogin = () => {
    navigation.navigate(keyNavigation.LOGIN);
  };

  const randomLoadingStartApp = () => {
    const key = Math.floor(Math.random() * 2);
    switch (key) {
      case 0:
        return "Bar";
      case 1:
        return "Pie";
    }
  };

  //Render:
  if (loading) {
    return (
      <LoadingProcess
        typeLoading={randomLoadingStartApp()}
        stopLoadingStartAppIntro={stopLoadingStartAppIntro}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchConfigColorApp} />
      <AppImage
        source={{ uri: sourceImg }}
        style={styles.imgHeader}
        resizeMode="cover"
      />
      <TouchableOpacity onPress={navigateLogin}>
        <Text>APP INTRO</Text>
        <AppIcon type="Entypo" name="500px" iconSize={22} color="red" />
        <AppText fontFamily={FontAppType.MotoyaLMaru}>
          Test App Text Font
        </AppText>
        <AppText fontFamily={FontAppType.Champagne}>Test App Text Font</AppText>
        <AppText fontFamily={FontAppType.Champagne}>Test App Text Font</AppText>
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
  );
}
export default React.memo(AppIntro);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: white
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
    height: 45,
    width: 45,
    backgroundColor: red
  }
});
