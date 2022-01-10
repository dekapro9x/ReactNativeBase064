import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { AppContainer } from "../../element/AppContainer";
import { keyNavigation } from "../../navigation/KeyNavigations";
export default function Home({ navigation, router }) {
  const navigateAppIntro = () => {
    navigation.navigate(keyNavigation.APP_INTRO);
  };
  return (
    <AppContainer>
      <View style={styles.container}>
        <TouchableOpacity
          styles={{
            height: 45,
            width: 250,
            boderWidth: 1,
            boderRadius: 10,
            backgroundColor: "green"
          }}
          onPress={navigateAppIntro}
        >
          <Text>HOME SCREEN</Text>
        </TouchableOpacity>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  bnt_mid: {}
});
