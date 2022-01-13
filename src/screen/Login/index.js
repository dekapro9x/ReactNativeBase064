import { AppImageZoom } from "@element/AppImageZoom";
import React, { useContext, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ContextContainer } from "../../context/AppContext";
import { AppContainer } from "../../element/AppContainer";
import { keyNavigation } from "../../navigation/KeyNavigations";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";

export default function Login({ navigation, router }) {
  const { colorApp } = useContext(ContextContainer);
  const refZoom = useRef(null);
  const arrImages = [
    {
      url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
      props: {}
    },
    {
      url: "",
      props: {
        source: require("../../images/Frog.gif")
      }
    }
  ];

  const navigateHome = () => {
    // navigation.navigate(keyNavigation.HOME);
    refZoom.current.showModal();
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
          <AppImageZoom
            getRefZoomImg={ref => {
              refZoom.current = ref;
            }}
            deviceWidth={SizeRpScreen.width(100)}
            imgZoom={arrImages}
            indexImgZoomStart={0}
          />;
          <TouchableOpacity
            styles={{
              height: 45,
              width: 250,
              boderWidth: 1,
              boderRadius: 10
            }}
            onPress={navigateHome}
          >
            <Text>LOGIN SCREEN</Text>
          </TouchableOpacity>
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
