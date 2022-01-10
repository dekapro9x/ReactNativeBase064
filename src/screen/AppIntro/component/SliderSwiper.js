//Library:
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/core';

//Setup:
import {SIZE, COLOR, KEY_NAVIGATION} from '../../../utils';
import {AppImage} from '../../../elements/AppImage';
import {AppText} from '../../../elements/AppText';

//Component:
import {Loading} from '../../../elements/Loading';

export default function SliderSwiper(props) {
  const {dataSlider, alwayShowSlider} = props;
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
  const onIndexChangeSlider = (index) => {
    console.log('index', index);
  };

  //Bắt đầu dùng app:
  const onPressStartApp = () => {
    navigation.replace(KEY_NAVIGATION.auth_navigator, {
      screen: KEY_NAVIGATION.policy,
      params: {},
    });
  };

  //Danh sách slider.
  const listSlider = () => {
    let listSlider = dataSlider.map((item, index) => {
      console.log(index, dataSlider.length);
      if (index < dataSlider.length - 1) {
        return (
          <View key={`${index}`} style={styles.slider}>
            <AppImage
              source={{
                uri: item.img,
              }}
              style={{
                height: '100%',
                width: '100%',
                alignSelf: 'center',
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
                uri: item.img,
              }}
              style={{
                height: '100%',
                width: '100%',
                alignSelf: 'center',
              }}
              resizeMode="stretch"
            />
            <TouchableOpacity
              onPress={onPressStartApp}
              style={{
                position: 'absolute',
                height: SIZE.height(3),
                width: SIZE.width(26),
                bottom: SIZE.height(2),
                right: SIZE.width(2),
                backgroundColor: COLOR.yellowLight,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AppText>START</AppText>
            </TouchableOpacity>
          </View>
        );
      }
    });
    return listSlider;
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (alwayShowSlider) {
    return (
      <Swiper
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        index={0}
        loop={false}
        autoplayDirection={true}
        autoplayTimeout={5}
        pagingEnabled={true}
        autoplay={false}
        style={styles.wrapper}
        showsButtons={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        onIndexChanged={(index) => onIndexChangeSlider(index)}
        nextButton={rederNextButton()}
        prevButton={renderPrevButton()}
        // onTouchStartCapture={() => {}}
        // onTouchStart={() => {}}
        // onTouchEnd={() => {}}
        // onMomentumScrollEnd={() => {}}
      >
        {listSlider()}
      </Swiper>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  activeDotStyle: {
    height: SIZE.width(2),
    width: SIZE.width(2),
    borderRadius: SIZE.width(1),
    backgroundColor: COLOR.main_color,
  },

  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    height: SIZE.width(2),
    width: SIZE.width(2),
    borderRadius: SIZE.width(1),
    backgroundColor: COLOR.main_color_2,
  },
  textNextSlider: {
    color: COLOR.white,
    fontSize: SIZE.H1,
    fontWeight: 'bold',
  },
  buttonNextSlider: {
    position: 'absolute',
    height: SIZE.height(8.5),
    width: SIZE.width(50),
    top: SIZE.height(25),
    left: SIZE.width(-72),
    backgroundColor: COLOR.blue_light_3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});