import { AppContainer } from "@element/AppContainer";
import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

const News: FunctionComponent = (props: any) => {
  const renderContent = () => {
    return (
      <View style={{ flex: 1 }}></View>
    )
  }

  return (
    <AppContainer
      useLinearGradient={false}
      nameScreen={"BẢNG TIN"}
      goBackScreen={false}
      flexWrapHeader = {true}
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

export default News;
