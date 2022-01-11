import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Progress from "react-native-progress";
import Icon from "react-native-vector-icons/FontAwesome";
import { pink50 } from "../const/Color";
import { SizeRpScreen } from "../resources/ResponsiveScreen";

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
      (function(index) {
        timeLoading = setTimeout(function() {
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
        return <Progress.Pie progress={process} size={250} />;
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

  return (
    <View style={styles.container}>
      {renderIconApp()}
      {renderGifFrog()}
      {renderLoading()}
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
