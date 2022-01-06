import React, { useEffect } from "react";
import RNBootSplash from "react-native-bootsplash";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { keyNavigation } from "../../navigation/KeyNavigations";

export default function AppIntro({ navigation, router }) {
  useEffect(() => {
    hideSplahScreen();
  }, []);
  const hideSplahScreen = async () => {
    const init = async () => {};
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  };
  const navigateLogin = () => {
    navigation.navigate(keyNavigation.LOGIN);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateLogin}>
        <Text>APP INTRO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green"
  },
  bnt_mid: {
    height: 45,
    width: 250,
    boderWidth: 1,
    boderRadius: 10,
    backgroundColor: "red"
  }
});
