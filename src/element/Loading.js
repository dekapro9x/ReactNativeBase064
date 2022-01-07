import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { pink500 } from "../const/Color";
import {SizeRpScreen } from "../resources/ResponsiveScreen";

const Loading = () => {
  return <View style={styles.container} >
    
  </View>
};

const styles = StyleSheet.create({
  container: {
    height: SizeRpScreen.device_height,
    width: SizeRpScreen.device_width,
    backgroundColor: pink500
  }
});

export default Loading;
