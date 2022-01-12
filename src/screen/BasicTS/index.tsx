import React, { FunctionComponent } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const Login: FunctionComponent = () => {
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
            <Text style={styles.textAppName}>GATEPLAY</Text>
            <Text style={styles.textPlatForm}>P L A T F O R M</Text>
          </View>
        </View>
        <Text style={styles.textSub}>
          Don't have an account?{" "}
          <Text style={styles.textSignUp}>Sign up now!</Text>
        </Text>
      </SafeAreaView>
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
