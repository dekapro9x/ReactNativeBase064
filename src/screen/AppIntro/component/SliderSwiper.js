//Library:
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useRef, useState, useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { blue300, green300, white } from "@css/Color";
import { keyAsyncStorage } from "../../../const/KeySyncStorage";
import { AppImage } from "../../../element/AppImage";
import { AppText } from "../../../element/AppText";
import { Loading } from "../../../element/Loading";
import AppBanner from "../../../libJS/react-native-swiper/AppBanner";
import { keyNavigation } from "@navigation/KeyNavigations";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import { ContextContainer } from "@context/AppContext";
import DataSlider from "./Data";
import { LoadingAppType } from "@const/TypeLoading";

export default function SliderSwiper(props) {
  const { alwayShowSlider } = props;
  const navigation = useNavigation();
  const [loading, setStateLoading] = useState(true);
  const startApp = useRef(null);
  const { setAppData } = useContext(ContextContainer);
  useEffect(() => {
    checkStartApp();
    checkConfigurationApplications();
    let timeCount = setTimeout(() => {
      setStateLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeCount);
    };
  }, []);

  const rederNextButton = () => {
    return (
      <View style={styles.buttonNextSlider}>
        <AppText style={styles.textNextSlider}> NEXT</AppText>
      </View>
    );
  };

  //Bắt đầu dùng app:
  const onPressStartApp = async () => {
    const startApp = "START_APP";
    await AsyncStorage.setItem(
      keyAsyncStorage.startAppClick,
      JSON.stringify(startApp)
    );
    navigateScreen(keyNavigation.POLICY);
  };

  const navigateScreen = keyNavigation => {
    navigation.replace(keyNavigation);
  };

  //Kiểm tra đã ấn nút bắt đầu app chưa?
  const checkStartApp = async () => {
    const startAppClick = await AsyncStorage.getItem(
      keyAsyncStorage.startAppClick
    );
    const checkPolicy = await AsyncStorage.getItem(
      keyAsyncStorage.agreePolicyClick
    );
    if (startAppClick && !checkPolicy) {
      startApp.current = startAppClick;
      navigateScreen(keyNavigation.POLICY);
    }
    if (startAppClick && checkPolicy) {
      startApp.current = startAppClick;
      navigateScreen(keyNavigation.LOGIN);
    }
  };

  //Kiểm tra cấu hình App.
  const checkConfigurationApplications = async () => {
    console.log("Kiểm tra cấu hình App")
    const startAppClick = await AsyncStorage.getItem(
      keyAsyncStorage.applicationConfiguration
    );
    if (startAppClick) {
      const configAppState = JSON.parse(startAppClick)
      console.log("configAppState", configAppState);
      setAppData(configAppState);
    }
  }

  //Nút ấn lùi lại slider trước.
  const renderPrevButton = () => {
    return <View />;
  };

  //Chuyển slider.
  const onIndexChangeSlider = index => { };

  //Danh sách slider.
  const listSlider = () => {
    let listSlider = DataSlider.map((item, index) => {
      if (index < DataSlider.length - 1) {
        return (
          <View key={`${index}`} style={styles.slider}>
            <AppImage
              source={{
                uri: item.img
              }}
              style={{
                height: "100%",
                width: "100%",
                alignSelf: "center"
              }}
              resizeMode="stretch"
            />
          </View>
        );
      } else {
        return (
          <View key={`${index}`} style={styles.slider}>
            <AppImage
              source={{
                uri: item.img
              }}
              style={{
                height: "100%",
                width: "100%",
                alignSelf: "center"
              }}
              resizeMode="stretch"
            />
            <TouchableOpacity
              onPress={onPressStartApp}
              style={{
                position: "absolute",
                height: SizeRpScreen.height(3),
                width: SizeRpScreen.width(26),
                bottom: SizeRpScreen.height(2),
                right: SizeRpScreen.width(2),
                backgroundColor: white,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <AppText>START</AppText>
            </TouchableOpacity>
          </View>
        );
      }
    });
    return listSlider;
  };

  if (loading) {
    return <Loading typeLoading={LoadingAppType.ReactNativeFireBase} />;
  }

  if (alwayShowSlider && !startApp.current) {
    return (
      <AppBanner
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        index={0}
        loop={false}
        autoplayDirection={true}
        autoplayTimeout={3}
        pagingEnabled={true}
        autoplay={false}
        style={{}}
        showsButtons={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        onIndexChanged={index => onIndexChangeSlider(index)}
        nextButton={rederNextButton()}
        prevButton={renderPrevButton()}
        onTouchStartCapture={() => { }}
        onTouchStart={() => { }}
        onTouchEnd={() => { }}
        onMomentumScrollEnd={() => { }}
      >
        {listSlider()}
      </AppBanner>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  activeDotStyle: {
    height: SizeRpScreen.width(5),
    width: SizeRpScreen.width(5),
    borderRadius: SizeRpScreen.width(2.5),
    backgroundColor: white
  },
  slider: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  dotStyle: {
    height: SizeRpScreen.width(2),
    width: SizeRpScreen.width(2),
    borderRadius: SizeRpScreen.width(1),
    backgroundColor: green300
  },
  textNextSlider: {
    color: white,
    fontSize: SizeRpScreen.H1,
    fontWeight: "bold"
  },
  buttonNextSlider: {
    position: "absolute",
    height: SizeRpScreen.height(8.5),
    width: SizeRpScreen.width(50),
    top: SizeRpScreen.height(25),
    left: SizeRpScreen.width(-72),
    backgroundColor: blue300,
    alignItems: "center",
    justifyContent: "center"
  }
});
