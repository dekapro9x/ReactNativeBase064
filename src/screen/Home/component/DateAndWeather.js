import { white } from "@css/Color";
import { keyNavigation } from "@navigation/KeyNavigations";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";


export default function DateAndWeather({ navigation, route }) {
  const [ indexImgWeather, setStateImgWeather ] = useState(2);
  const arrImgWeather = [
    require("../../../images/Weather1.jpg"),
    require("../../../images/Weather2.jpg"),
    require("../../../images/Weather3.jpg")]

  useEffect(() => {
    getCurrentWeatherLocations();
    return () => {
    };
  }, []);

  const getCurrentWeatherLocations = () => {

  }


  const gotoDetailWeatherScreen = () => {
    navigation.navigate(keyNavigation.BASIC_JS)
  }

  return (
    <TouchableOpacity
      onPress={gotoDetailWeatherScreen}
      style={{ height: 80, width: "100%" }}>
      <ImageBackground
        source={arrImgWeather[indexImgWeather]}
        style={{ height: 80, width: "100%" }}></ImageBackground>

    </TouchableOpacity>
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
