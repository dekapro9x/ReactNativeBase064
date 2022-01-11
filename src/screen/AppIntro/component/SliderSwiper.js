//Library:
import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { blue300, green300, white } from "../../../const/Color";
import { keyNavigation } from "../../../navigation/KeyNavigations";
import { AppImage } from "../../../element/AppImage";
import { AppText } from "../../../element/AppText";
import Banner from "../../../element/AppBanner";
import { Loading } from "../../../element/Loading";
import { SizeRpScreen } from "../../../resources/ResponsiveScreen";
import DataSlider from "./Data";

export default function SliderSwiper(props) {
  const { alwayShowSlider } = props;
  const navigation = useNavigation();
  const [loading, setStateLoading] = useState(true);
  useEffect(() => {
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

  //Nút ấn lùi lại slider trước.
  const renderPrevButton = () => {
    return <View />;
  };

  //Chuyển slider.
  const onIndexChangeSlider = index => {};

  //Bắt đầu dùng app:
  const onPressStartApp = () => {
    navigation.replace(keyNavigation.LOGIN);
  };

  //Danh sách slider.
  const listSlider = () => {
    let listSlider = DataSlider.map((item, index) => {
      console.log(index, DataSlider.length);
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
    return <Loading />;
  }

  if (alwayShowSlider) {
    return (
      <Banner
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
        onTouchStartCapture={() => {}}
        onTouchStart={() => {}}
        onTouchEnd={() => {}}
        onMomentumScrollEnd={() => {}}
      >
        {listSlider()}
      </Banner>
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
