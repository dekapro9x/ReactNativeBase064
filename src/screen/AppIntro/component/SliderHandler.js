//Library:
import React, {useRef, useEffect, useState} from 'react';
import {View, Animated} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import AntDesign from 'react-native-vector-icons/AntDesign';

//Setup:
import {COLOR, SIZE, KEY_NAVIGATION} from '../../../utils';

//Component:
import {AppImage} from '../../../elements/AppImage';
import {AppTextButton} from '../../../elements/AppTextButton';
import IntroDot from './IntroDot';
import {Loading} from '../../../elements/Loading';

export default function SliderHandler(props) {
  const {dataSlider} = props;
  const navigation = useNavigation();
  const animatedScroll = useRef(new Animated.Value(0));
  const scrollViewRef = useRef(null);
  const checkNavigateRef = useRef(false);
  const [loading, setStateLoading] = useState(false);

  useEffect(() => {
    const timeCount = setTimeout(() => {
      setStateLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeCount);
    };
  }, []);

  //Bắt đầu dùng App:
  const onStartApp = async () => {
    navigation.replace(KEY_NAVIGATION.auth_navigator, {
      screen: KEY_NAVIGATION.policy,
      params: {},
    });
  };

  //Nút bắt đầu:
  const renderButtonStartApp = () => {
    return (
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          bottom: SIZE.width(8),
          right: 10,
        }}>
        <AppTextButton
          textStyle={{
            fontWeight: 'bold',
            fontSize: SIZE.H5 * 1.1,
            color: COLOR.color_bottom_app1,
          }}
          title={'START'}
          onPress={onStartApp}
        />
        <AntDesign
          style={{
            fontSize: SIZE.H5 * 1.2,
          }}
          name="right"
          color={COLOR.color_bottom_app1}
          size={SIZE.icon_size}
        />
      </View>
    );
  };

  //Item Slider:
  const renderItemSlider = () => {
    const listSlider = dataSlider.map((item, index) => {
      if (index === dataSlider.length - 1) {
        return (
          <PanGestureHandler
            key={`${item.id}`}
            onGestureEvent={(event) => {
              if (
                event.nativeEvent.translationX <= -SIZE.width(10) &&
                !checkNavigateRef.current
              ) {
                checkNavigateRef.current = true;
                onStartApp();
              }
              if (event.nativeEvent.translationX > 0) {
                const backPos = (dataSlider.length - 2) * SIZE.device_width;
                scrollViewRef.current.scrollTo({
                  x: backPos,
                  y: 0,
                  animated: true,
                });
              }
            }}>
            <View>
              <AppImage
                source={{uri: item.img}}
                resizeMode={'cover'}
                style={{
                  width: SIZE.device_width,
                  height: '100%',
                }}
              />
              {/* Nút bắt đầu dùng App */}
              {renderButtonStartApp()}
            </View>
          </PanGestureHandler>
        );
      }
      return (
        <View key={`${item.id}`}>
          <AppImage
            source={{uri: item.img}}
            resizeMode={'cover'}
            style={{
              width: SIZE.device_width,
              height: '100%',
            }}
          />
        </View>
      );
    });
    return listSlider;
  };
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <View style={{flex: 1, backgroundColor: COLOR.TRANSPARENT}}>
      <Animated.ScrollView
        ref={scrollViewRef}
        bounces={false}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {x: animatedScroll.current},
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}>
        {renderItemSlider()}
      </Animated.ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: SIZE.width(10),
          backgroundColor: COLOR.grey_0,
          paddingHorizontal: 10,
          borderRadius: 10,
          left: SIZE.width(36),
        }}>
        <IntroDot
          pageLength={dataSlider.length}
          animatedScroll={animatedScroll.current}
        />
      </View>
    </View>
  );
}