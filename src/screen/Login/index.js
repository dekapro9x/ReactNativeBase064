
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { AppContainer } from "../../element/AppContainer";
import { keyNavigation } from "../../navigation/KeyNavigations";

export default function Login({ navigation, router }) {

  const navigateHome = () => {
    navigation.navigate(keyNavigation.HOME);
  };

  const renderContent = () => {
    return (
      <LinearGradient
        colors={["#481E34", "#16192B"]}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={[styles.linearGradientContainer]}
      >
     
        <View style={[styles.containerContent]}>
          <TouchableOpacity
            styles={{
              height: 45,
              width: 250,
              boderWidth: 1,
              boderRadius: 10
            }}
            onPress={navigateHome}
          >
            <Text>LOGIN SCREEN</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  };

  return (
    <AppContainer nameScreen={""} goBackScreen={false} flexWrapHeader>
      {renderContent()}
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  linearGradientContainer: {
    flex: 1
  }
});
