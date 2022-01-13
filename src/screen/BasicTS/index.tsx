import React, { FunctionComponent } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { keyNavigation } from "../../navigation/KeyNavigations";
import { DebounceButton } from "../../element/DebounceButton";
import { AppImageScaleZoom } from "@element/AppImageScaleZoom";
import { SizeRpScreen } from "@resources/ResponsiveScreen";

const Login: FunctionComponent = ({ navigation, router }) => {

  const navigateBasicJS = () => {
    navigation.navigate(keyNavigation.BASIC_JS);
  }
  return (
    <LinearGradient
      colors={["#481E34", "#16192B"]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        <View style={styles.viewLogo}>
          <View style={styles.viewAppName}>
            <Text style={styles.textAppName}>BASIC TS SCREEN</Text>
          </View>
        </View>
        <Text style={styles.textSub}>
          Don't have an account?{" "}
          <Text style={styles.textSignUp}>Sign up now!</Text>
        </Text>
        <AppImageScaleZoom
          useAutoScale={true}
          url={"https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM="}
          style={{
            width: SizeRpScreen.device_width - 32,
            height:0,
          }}
          resizeMode={'cover'}
          useZoom={false}
        ></AppImageScaleZoom>
        <DebounceButton
          onPress={navigateBasicJS}
          useDelay={true}
        ></DebounceButton>
      </SafeAreaView>
      {/* <AppImageZoom></AppImageZoom> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
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

export default Login;
