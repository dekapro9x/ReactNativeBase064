//Library:
import React, {useContext, useState, useRef, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import {AppImage} from './AppImage';
import {AppText} from './AppText';
import { ContextContainer } from '../context/AppContext';
import { black, grey800, white } from '../const/Color';

const AppContainer = (props) => {
  const {logoApp} = useContext(ContextContainer);
  const {
    children,
    style,
    noHeader,
    goBackScreen,
    haveTitle,
    rightTitle,
    midTitle,
    nameScreen,
    warningGoback,
    textWairning,
  } = props;
  const navigation = useNavigation();
  const {goBack} = navigation;
  const timeCountActive = useRef(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    return () => {
      clearTimeout(timeCountActive.current);
    };
  }, []);

  const onPressGoBack = () => {
    setActive(true);
    timeCountActive.current = setTimeout(() => {
      setActive(false);
    }, 1000);
    if (warningGoback) {
      Alert.alert(
        `${textWairning}`,
        '',
        [
          {
            text: 'Hủy bỏ',
            style: 'cancel',
          },
          {
            text: 'Đồng ý',
            style: 'cancel',
            onPress: () => {
              goBack();
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      goBack();
    }
  };

  //Nút quay lại
  const renderButtonGoBack = () => {
    return (
      <>
        {goBackScreen ? (
          <TouchableOpacity
            disabled={active}
            onPress={onPressGoBack}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AntDesign
              style={{marginLeft: SizeRpScreen.width(2)}}
              name="left"
              size={18}
              color={black}
            />
            <AppText style={{fontSize: SizeRpScreen.H5 * 1.2}}>Back</AppText>
          </TouchableOpacity>
        ) : (
          <View style={{flex: 1}} />
        )}
      </>
    );
  };

  //Giữa
  const renderMid = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          minWidth: SizeRpScreen.width(20),
          justifyContent: 'center',
        }}>
        {midTitle ? (
          midTitle
        ) : (
          <AppText
            style={{
              fontSize:
                nameScreen && nameScreen.length > 7 ? SizeRpScreen.H5 * 1.2 : SizeRpScreen.H4,
              fontWeight: 'bold',
            }}>
            {nameScreen}
          </AppText>
        )}
      </View>
    );
  };

  //Phải:
  const renderRight = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {rightTitle}
      </View>
    );
  };

  const renderTitle = () => {
    return (
      <View style={{backgroundColor: white}}>
        {!noHeader && (
          <View
            style={{
              height: SizeRpScreen.width(12),
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <AppImage
              source={{
                uri: logoApp,
              }}
              style={{
                height: SizeRpScreen.icon_button * 2,
                width: SizeRpScreen.width(60),
                alignSelf: 'center',
              }}
              resizeMode="contain"
            />
          </View>
        )}
        {haveTitle ? (
          <View
            style={{
              height: SizeRpScreen.width(9),
              width: SizeRpScreen.width(100),
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: grey800,
            }}>
            {renderButtonGoBack()}
            {renderMid()}
            {renderRight()}
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle={'dark-content'} />
      {renderTitle()}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'flex-start',
  },
});
export {AppContainer};
