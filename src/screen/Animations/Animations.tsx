import { AppContainer } from "@element/AppContainer";
import { AppText } from "@element/AppText";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { FunctionComponent, useEffect, useState } from "react";
import { BackHandler, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

const AnimationsScreen: FunctionComponent = (props: any) => {
  const [showListMenuComponentAnimations, setStateShowListMenuComponent] = useState(false);
  useEffect(() => {
    const backAction = () => {
      if (showListMenuComponentAnimations) {
        setStateShowListMenuComponent(false);
      } else {
        const { navigation } = props;
        navigation.goBack();
      }
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [showListMenuComponentAnimations]);

  const renderContent = () => {
    const { MenuAnimations } = props;
    if (showListMenuComponentAnimations) {
      return (
        <SafeAreaView style={styles.content}>
          <View style={[{ backgroundColor: "red", minHeight: SizeRpScreen.height(100), width: SizeRpScreen.width(100) }]}>

          </View>
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView style={styles.content}>
        {MenuAnimations.map((itemMenuAnimated, index) => {
          return (
            <TouchableOpacity
              key={`${index}`}
              onPress={() => {
                setStateShowListMenuComponent(true);
              }}
              style={{ height: 40, width: SizeRpScreen.width(80), backgroundColor: "red", marginTop: 12, justifyContent: "center", alignItems: 'center' }}>
              <AppText style={{}}>
                {itemMenuAnimated.keyName}
              </AppText>
            </TouchableOpacity>
          )
        })}
      </SafeAreaView>
    );
  }
  return (
    <AppContainer
      useLinearGradient={false}
      nameScreen={"Animations"}
      goBackScreen={false}
      flexWrapHeader
    >
      {renderContent()}
    </AppContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 64,
  },
  textPlatForm: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#433A45",
    paddingLeft: 6,
  },
  viewLogo: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  viewAppName: {
    justifyContent: "center",
  },
  textAppName: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default AnimationsScreen;
