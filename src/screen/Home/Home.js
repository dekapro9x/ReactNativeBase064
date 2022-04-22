import { AppContainerScroll } from "@element/AppContainerScroll";
import { ViewLoadingContainerHOC } from "@HOC/ViewLoadingContainerHOC";
import React, { useEffect } from "react";
import { LogBox, StyleSheet, View } from "react-native";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";
import BannerHome from "./component/BannerHome";
import DateAndWeather from "./component/DateAndWeather";
import HomeMenu from "./component/HomeMenu";
import { RightHeaderComponent } from "./component/RightHeader";
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

export default function Home(props) {
  const { navigation, router } = props;
  const { languageCurrent } = props;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.closeDrawer();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <AppContainerScroll
      opitonsLanguage={true}
      haveDrawer
      useLinearGradient={false}
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
      rightHeaderComponent={<RightHeaderComponent navigation={navigation} />}>
      <View style={[styles.container]}>
        <View style={styles.containerBanner}>
          <BannerHome />
        </View>
        <ViewLoadingContainerHOC isLoading={false}>
          <DateAndWeather navigation={navigation} />
          <HomeMenu navigation={navigation} dataMenu={props.homeMenu} />
        </ViewLoadingContainerHOC>
      </View>
    </AppContainerScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
