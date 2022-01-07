import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View , Text} from "react-native";
import RNBootSplash from "react-native-bootsplash";
import Loading from "../../element/Loading";
import { keyNavigation } from "../../navigation/KeyNavigations";

export default function AppIntro({ navigation, router }) {
  const [loading, setStateLoading] = useState(true);
  useEffect(() => {
    hideSplahScreen();
  }, []);

  const stopLoadingStartAppIntro = () => {
    setStateLoading(false);
  };

  const hideSplahScreen = async () => {
    const init = async () => {};
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  };

  const navigateLogin = () => {
    navigation.navigate(keyNavigation.LOGIN);
  };

  const randomLoadingStartApp = () => {
    const key = Math.floor(Math.random() * 2);
    switch (key) {
      case 0:
        return "Bar";
      case 1:
        return "Pie";
    }
  };

  //Render:
  if (loading) {
    return (
      <Loading
        typeLoading={randomLoadingStartApp()}
        stopLoadingStartAppIntro={stopLoadingStartAppIntro}
      />
    );
  }

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
