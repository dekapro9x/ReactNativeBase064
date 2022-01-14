import { LoadingAppType } from "../const/TypeLoading";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import AnimatedLoader from "@libJS/react-native-animated-loader";
import { AppLoadingType } from "../const/Setting";
// Link AnimatedLoader mẫu: https://github.com/lottie-react-native/lottie-react-native/tree/master/example/js/animations
const Loading = props => {
  const { style } = props;
  const loadingComponent = () => {
    const { typeLoading = AppLoadingType } = props;
    switch (typeLoading) {
      case LoadingAppType.Default:
        return <ActivityIndicator size="large" color="#00ff00" />;
      case LoadingAppType.AnimatedLoader:
        return (
          <AnimatedLoader
            style={[styles.animatedLoaderDefault]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/loader.json")}
            animationStyle={styles.loadingLottie}
            speed={1}
          />
        );
      case LoadingAppType.LottieView_9squares_AlBoardman:
        return (
          <AnimatedLoader
            style={[styles.animatedLoaderDefault]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/9squares-AlBoardman.json")}
            animationStyle={styles.loadingLottie}
            speed={1}
          />
        );
    }
  };

  return (
    <View style={[styles.containerLoading, style]}>
      {loadingComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    width: SizeRpScreen.device_width,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingLottie: {
    width: 100,
    height: 100
  }
});
export { Loading };
