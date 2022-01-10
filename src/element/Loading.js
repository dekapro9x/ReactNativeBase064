import React from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
const { width } = Dimensions.get("window");
const Loading = props => {
  const { style } = props;
  return (
    <View
      style={[
        {
          flex: 1,
          width,
          backgroundColor: "transparent",
          justifyContent: "center",
          alignItems: "center"
        },
        style
      ]}
    >
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};
export { Loading };

