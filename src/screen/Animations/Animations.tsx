import { AppContainer } from "@element/AppContainer";
import React, { FunctionComponent } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { arrMenu } from "./models";


const AnimationsScreen: FunctionComponent = (props) => {
  const renderContent = () => {
    return (
      <SafeAreaView style={styles.content}>
        {arrMenu.map((itemMenu, index) => {
          return (
            <TouchableOpacity style={{ height: 40, width: 100, backgroundColor: "red", marginTop: 12 }}>

            </TouchableOpacity>
          )
        })}
      </SafeAreaView>
    );
  }
  return (
    <AppContainer
      useLinearGradient={false}
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
    >
      {renderContent()}
    </AppContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
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

export default AnimationsScreen;
