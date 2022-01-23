import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContainer } from "../../element/AppContainer";
import { DebounceButton } from "../../element/DebounceButton";
import { keyNavigation } from "../../navigation/KeyNavigations";

function BasicJS({ navigation, router }) {
  useLayoutEffect(() => {
    return () => { };
  }, []);

  useEffect(() => { }, []);

  const navigateAppIntro = () => {
    navigation.navigate(keyNavigation.APP_INTRO);
  };

  const renderContent = () => {
    return (
      <View style={[styles.containerContent]}>
        <Text>Basic JS Screen</Text>
        <DebounceButton
          useLoading={false}
          useDelay={false}
          onPress={navigateAppIntro}
        />
      </View>
    );
  };

  return (
    <AppContainer
      useLinearGradient={false}
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
    >
      {renderContent()}
    </AppContainer>
  );
}
export default React.memo(BasicJS);

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    alignItems: "center"
  }
});
