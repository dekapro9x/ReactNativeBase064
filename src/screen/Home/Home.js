import { ContextContainer } from "@context/AppContext";
import { AppContainerScroll } from "@element/AppContainerScroll";
import { ViewLoadingContainerHOC } from "@HOC/ViewLoadingContainerHOC";
import React, { useContext, useEffect, useRef, useState } from "react";
import { LogBox, StyleSheet, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";
import BannerHome from "./component/BannerHome";
import DateAndWeather from "./component/DateAndWeather";
import HomeMenu from "./component/HomeMenu";
import { RightHeaderComponent } from "./component/RightHeader";
import { SubMenu } from "./component/SubMenu";
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function Home(props) {
  const [loadingHome, useStateLoadingHome] = useState(true);
  const { colorApp } = useContext(ContextContainer);
  let timeCount = useRef(0).current;
  const { navigation, router } = props;
  const { languageCurrent } = props;

  useEffect(() => {
    delayRenderHome();
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.closeDrawer();
    });
    return () => {
      clearTimeout(timeCount);
      unsubscribe;
    }
  }, [navigation]);

  const delayRenderHome = () => {
    timeCount = setTimeout(() => {
      useStateLoadingHome(false);
    }, 1250);
  }

  const renderContent = () => {
    if (loadingHome) {
      return <View style={[styles.container, { backgroundColor: colorApp.backgroundColor, alignItems: "center" }]}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item width={SizeRpScreen.device_width - SizeRpScreen.width(1)} height={SizeRpScreen.height(35)} borderRadius={5} marginTop={5} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={SizeRpScreen.device_width - SizeRpScreen.width(1)} height={SizeRpScreen.height(15)} borderRadius={5} marginTop={2} />
          <SkeletonPlaceholder.Item flexDirection="row" justifyContent="center" marginTop={5}>
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item flexDirection="row" justifyContent="center" marginTop={5}>
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item flexDirection="row" justifyContent="center" marginTop={5}>
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
            <SkeletonPlaceholder.Item width={SizeRpScreen.height(9)} height={SizeRpScreen.height(9)} borderRadius={0} marginTop={2} marginLeft={2} marginRight={2} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    }
    return (
      <>
        <View style={styles.containerBanner}>
          <BannerHome />
        </View>
        <ViewLoadingContainerHOC isLoading={false}>
          <DateAndWeather navigation={navigation} />
          <SubMenu></SubMenu>
          <HomeMenu navigation={navigation} dataMenu={props.homeMenu} />
        </ViewLoadingContainerHOC>
      </>
    )
  }

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
        {renderContent()}
      </View>
    </AppContainerScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: SizeRpScreen.height(100) * 1
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
