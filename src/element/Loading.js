import { LoadingAppType } from "../const/TypeLoading";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import AnimatedLoader from "@libJS/react-native-animated-loader";
import { AppLoadingType } from "../const/Setting";
// Link AnimatedLoader mẫu: https://github.com/lottie-react-native/lottie-react-native/tree/master/example/js/animations
//Cài đặt Loading mặc định trong Setting.js
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
            animationStyle={styles.animatedLoader}
            speed={1}
          />
        );
      case LoadingAppType.LottieView_9squares_AlBoardman:
        return (
          <AnimatedLoader
            style={[styles.animatedLoader]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/9squares-AlBoardman.json")}
            animationStyle={styles.animatedLoader}
            speed={1}
          />
        );
      case LoadingAppType.HamburgerArrow:
        return (
          <AnimatedLoader
            style={[styles.animatedLoaderDefault]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/HamburgerArrow.json")}
            animationStyle={styles.animatedLoader}
            speed={1}
          />
        );
      case LoadingAppType.LineAnimation:
        return (
          <AnimatedLoader
            style={[styles.animatedLoaderDefault]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/LineAnimation.json")}
            animationStyle={styles.animatedLoader}
            speed={1}
          />
        );
      case LoadingAppType.LottieLogo1:
        return (
          <AnimatedLoader
            style={[styles.animatedLoaderDefault]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/LottieLogo1.json")}
            animationStyle={styles.animatedLoader}
            speed={1}
          />
        );
      case LoadingAppType.LottieLogo2:
        return (
          <AnimatedLoader
            style={[styles.animatedLoaderDefault]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/LottieLogo2.json")}
            animationStyle={styles.animatedLoader}
            speed={1}
          />
        );
      case LoadingAppType.LottieWalkthrough:
        return (
          <AnimatedLoader
            style={[styles.animatedLoaderDefault]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/LottieWalkthrough.json")}
            animationStyle={styles.animatedLoader}
            speed={1}
          />
        );
      case LoadingAppType.MotionCorpse_Jrcanest:
        return (
          <AnimatedLoader
            style={[styles.animatedLoaderDefault]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/MotionCorpse-Jrcanest.json")}
            animationStyle={styles.animatedLoader}
            speed={1}
          />
        );
      case LoadingAppType.PinJump:
        return (
          <AnimatedLoader
            style={[styles.animatedLoaderDefault]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/PinJump.json")}
            animationStyle={styles.animatedLoader}
            speed={1}
          />
        );
      case LoadingAppType.TwitterHeart:
        return (
          <AnimatedLoader
            style={[styles.animatedLoaderDefault]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/TwitterHeart.json")}
            animationStyle={styles.animatedLoader}
            speed={1}
          />
        );
      case LoadingAppType.Watermelon:
        return (
          <AnimatedLoader
            style={[styles.animatedLoaderDefault]}
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../libJS/react-native-animated-loader/Watermelon.json")}
            animationStyle={styles.animatedLoader}
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
  animatedLoader: {
    width: 300,
    height: 300
  }
});
export { Loading };
