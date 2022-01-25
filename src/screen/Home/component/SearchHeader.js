import { ContextContainer } from "@context/AppContext";
import { black, white } from "@css/Color";
import { AppIcon } from "@element/AppIcon";
import { DebounceButton } from "@element/DebounceButton";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SearchHeader({ navigation }) {
  const { colorApp } = useContext(ContextContainer);

  const showDrawer = () => {
    navigation.openDrawer();
  };

  const renderTouchShowDrawer = () => {
    return (
      <DebounceButton
        title=""
        useLoading={false}
        useDelay={false}
        onPress={showDrawer}
        style={{
          height: 45,
          width: 65,
          borderRadius: 0,
          marginLeft: 6,
          backgroundColor: colorApp.backgroundColor
        }}
      >
        <AppIcon type={"Ionicons"} name={"menu"} iconSize={26} color={black} />
      </DebounceButton>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: colorApp.backgroundColor
        }
      ]}
    >
      {renderTouchShowDrawer()}
      <Text> DateAndWeather </Text>
      <Text> DateAndWeather </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: SizeRpScreen.width(100),
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center"
  }
});
