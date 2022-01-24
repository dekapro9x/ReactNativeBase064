import { AppContainerScroll } from "@element/AppContainerScroll";
import { ViewLoadingContainerHOC } from "@HOC/ViewLoadingContainerHOC";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";
import BannerHome from "./component/BannerHome";
import DateAndWeather from "./component/DateAndWeather";
import HomeMenu from "./component/HomeMenu";
import { RightHeaderComponent } from "./component/RightHeader";
import Testview from "./component/TestView";

export default function Home({ navigation, router }) {
  useEffect(() => {
    console.log("HOMEEEE")
    const unsubscribe = navigation.addListener('focus', () => {
      console.log("Home Screen")
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <AppContainerScroll
      useLinearGradient={false}
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
      rightHeaderComponent={<RightHeaderComponent navigation={navigation} />}>
      <View style={[styles.container]}>
        <DateAndWeather navigation={navigation} />
        <View style={styles.containerBanner}>
          <BannerHome></BannerHome>
        </View>
        <ViewLoadingContainerHOC isLoading={false}>
          <HomeMenu navigation={navigation} />
        </ViewLoadingContainerHOC>
        {/* <Testview></Testview> */}
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
  containerBanner: {
    height: SizeRpScreen.width(100) * 9 / 16,
    width: SizeRpScreen.width(100),
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
