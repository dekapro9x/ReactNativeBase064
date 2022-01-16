import { AppContainerScroll } from "@element/AppContainerScroll";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";
import BannerHome from "./component/BannerHome";
import DateAndWeather from "./component/DateAndWeather";
import HomeMenu from "./component/HomeMenu";
import { RightHeaderComponent } from "./component/RightHeader";

export default function Home({ navigation, router }) {
  useEffect(() => {
    return () => { };
  }, []);

  return (
    <AppContainerScroll
      useLinearGradient={false}
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
      rightHeaderComponent={<RightHeaderComponent navigation={navigation}/>}>
      <View style={[styles.container]}>
        <DateAndWeather />
        <BannerHome />
        <HomeMenu navigation={navigation} />
      </View>
    </AppContainerScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: SizeRpScreen.height(100) * 2
  },
  bnt_mid: {
    height: 45,
    width: 250,
    boderWidth: 1,
    boderRadius: 10,
    backgroundColor: "red"
  },
  imgHeader: {
    height: SizeRpScreen.width(50),
    width: SizeRpScreen.width(100),
    alignSelf: "center"
  },
});
