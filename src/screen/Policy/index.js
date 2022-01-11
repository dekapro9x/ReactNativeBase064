import React, { useEffect, useLayoutEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ContextContainer } from "../../context/AppContext";
import { AppContainer } from "../../element/AppContainer";

function AppIntro({ navigation, router }) {
  const { colorApp } = useContext(ContextContainer);
  useLayoutEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {}, []);

  const renderContent = () => {
    return <View >
      <Text>
        hashdhashdahsd
      </Text>
    </View>
  };

  return (
    <AppContainer
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
      style={[styles.container, { backgroundColor: colorApp.backgroundColor }]}
    >
      {renderContent()}
    </AppContainer>
  );
}
export default React.memo(AppIntro);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
