import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import Icon from "react-native-vector-icons/FontAwesome";
import { black, pink50 } from "@css/Color";
import { FontAppType } from "../const/TypeFontFamily";
import AppTextTicker from "../libJS/react-native-text-ticker/AppTextTicker";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { AppText } from "./AppText";

const LoadingProcess = props => {
  let timeLoading = 0;
  const processLoading = [15, 20, 30, 60, 70, 80, 100];
  const [process, setStateProcess] = useState(0);
  useEffect(() => {
    processActions();
    return () => {
      clearTimeout(timeLoading);
    };
  }, []);
  const processActions = () => {
    const timeNextProcess = 300;
    for (
      let indexProcess = 0;
      indexProcess <= processLoading.length - 1;
      indexProcess++
    ) {
      (function (index) {
        timeLoading = setTimeout(function () {
          setStateProcess(processLoading[index] / 100);
          if (
            index == processLoading.length - 1 &&
            props &&
            props.stopLoadingStartAppIntro
          ) {
            props.stopLoadingStartAppIntro();
          }
        }, timeNextProcess * index);
      })(indexProcess);
    }
  };
  const renderIconApp = () => {
    return <Icon name={"grav"} size={150} color={"red"} />;
  };
  renderLoading = () => {
    const { typeLoading = "Bar" } = props;
    switch (typeLoading) {
      case "Bar":
        return (
          <Progress.Bar
            animated={true}
            progress={process}
            width={300}
            useNativeDriver={true}
            height={10}
            animationConfig={{ bounciness: 2 }}
            animationType={"spring"}
          />
        );
      case "Pie":
        return <Progress.Pie progress={process} size={150} />;
      case "Circle":
        return <Progress.Circle size={50} indeterminate={true} />;
      case "CircleSnail":
        return <Progress.CircleSnail color={["red", "green", "blue"]} />;
    }
  };

  const renderGifFrog = () => {
    return (
      <Image
        source={require("../images/Frog.gif")}
        style={{ width: 100, height: 100 }}
      />
    );
  };

  const renderTextTitle = () => {
    return (
      <>
        <AppText fontFamily={FontAppType.Happy} style={{ fontSize: 45 }}>
          React Native
        </AppText>
        <AppText fontFamily={FontAppType.LetterMagic} style={{ fontSize: 45 }}>
          App Base
        </AppText>
      </>
    );
  };

  const renderTextTicker = () => {
    return (
      <AppTextTicker
        style={{ fontSize: 14, color: black, fontFamily: FontAppType.LetterMagic }}
        duration={2000}
        loop
        bounce
        repeatSpacer={100}
        marqueeDelay={0}
      >
        Made by BeoTran. Contact dekapro9x@gmail.com
      </AppTextTicker>
    )
  }

  return (
    <View style={styles.container}>
      {renderTextTitle()}
      {renderIconApp()}
      {renderGifFrog()}
      {renderLoading()}
      {renderTextTicker()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SizeRpScreen.device_height,
    width: SizeRpScreen.device_width,
    backgroundColor: pink50,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoadingProcess;
