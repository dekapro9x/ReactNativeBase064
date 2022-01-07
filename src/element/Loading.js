import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import { pink50 } from "../const/Color";
import { SizeRpScreen } from "../resources/ResponsiveScreen";

const Loading = props => {
  let timeLoading = 0;
  const processLoading = [15, 30, 45, 60, 80, 100];
  const [process, setStateProcess] = useState(0);
  useEffect(() => {
    processActions();
    return () => {
      clearTimeout(timeLoading);
    };
  }, []);
  const processActions = () => {
    for (
      let indexProcess = 0;
      indexProcess <= processLoading.length - 1;
      indexProcess++
    ) {
      (function(index) {
        timeLoading = setTimeout(function() {
          console.log(index, processLoading[index]);
          setStateProcess(processLoading[index] / 100);
        }, 1000 * index);
      })(indexProcess);
    }
  };
  renderLoading = () => {
    const { typeLoading } = props;
    switch (typeLoading) {
      case "Bar":
        return <Progress.Bar progress={process} width={300} />;
      case "Pie":
        return <Progress.Pie progress={0.4} size={50} />;
      case "Circle":
        return <Progress.Circle size={30} indeterminate={true} />;
      case "CircleSnail":
        return <Progress.CircleSnail color={["red", "green", "blue"]} />;
    }
  };

  return (
    <View style={styles.container}>
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

export default Loading;
