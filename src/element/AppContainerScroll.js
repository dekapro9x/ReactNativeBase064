//Library:
import { useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import { black, grey800, white } from "@css/Color";
import { ContextContainer } from "../context/AppContext";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { AppText } from "./AppText";
import { DebounceButton } from "./DebounceButton";
import { AppIcon } from "./AppIcon";

const AppContainerScroll = props => {
  const { logoApp, colorApp, linearGradientApp } = useContext(ContextContainer);
  const animation = useRef(new Animated.Value(0));
  const spin = animation.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const {
    useHeader = true,
    useLinearGradient = true,
    children,
    style,
    goBackScreen,
    rightHeaderComponent,
    nameScreen,
    warningGoback,
    textWairning,
    haveDrawer = false
  } = props;
  const navigation = useNavigation();
  const { goBack } = navigation;
  const timeCountActive = useRef(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    startAnimation();
    return () => {
      clearTimeout(timeCountActive.current);
    };
  }, []);

  const startAnimation = () => {
    animation.current.setValue(0);
    Animated.timing(animation.current, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(startAnimation);
  };

  const onPressGoBack = () => {
    setActive(true);
    timeCountActive.current = setTimeout(() => {
      setActive(false);
    }, 1000);
    if (warningGoback) {
      Alert.alert(
        `${textWairning}`,
        "",
        [
          {
            text: "Hủy bỏ",
            style: "cancel"
          },
          {
            text: "Đồng ý",
            style: "cancel",
            onPress: () => {
              goBack();
            }
          }
        ],
        { cancelable: false }
      );
    } else {
      goBack();
    }
  };
  const showDrawer = () => {
    navigation.openDrawer();
  };

  //Nút mở drawer:
  const renderTouchShowDrawer = () => {
    return (
      <DebounceButton
        title=""
        useLoading={false}
        useDelay={false}
        onPress={showDrawer}
        style={{
          flex:1,
          width: 65,
          borderRadius: 0,
          marginLeft: 6,
          backgroundColor: colorApp.backgroundColor
        }}
      >
        <AppIcon type={"Ionicons"} name={"menu"} iconSize={26} color={black} />
      </DebounceButton>
    );
  };

  //Nút quay lại
  const leftHeader = () => {
    return (
      <View style={{ flex: 1 }}>
        {haveDrawer && <View style={{ flex: 1 }}>
          {renderTouchShowDrawer()}
        </View>}
        {goBackScreen &&
          <TouchableOpacity
            disabled={active}
            onPress={onPressGoBack}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: SizeRpScreen.width(2)
            }}>
            <AntDesign
              style={{ marginLeft: SizeRpScreen.width(2) }}
              name="left"
              size={18}
              color={black}
            />
            <AppText style={{ fontSize: SizeRpScreen.H5 * 1.2 }}>Back</AppText>
          </TouchableOpacity>
        }
      </View>
    );
  };

  //Giữa
  const midHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {nameScreen
          ?
          <AppText
            style={{
              fontSize:
                nameScreen && nameScreen.length > 7
                  ? SizeRpScreen.H5 * 1.2
                  : SizeRpScreen.H4,
              fontWeight: "bold"
            }}
          >
            {nameScreen}
          </AppText>
          :
          <Animated.Image
            style={{ width: SizeRpScreen.height(5), height: SizeRpScreen.width(18), transform: [{ rotate: spin }] }}
            source={{
              uri: logoApp
            }}
            resizeMode="contain">
          </Animated.Image>
        }
      </View>
    );
  };

  //Phải:
  const rightHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          marginRight: SizeRpScreen.width(2),
          alignItems: "flex-end"
        }}
      >
        {rightHeaderComponent}
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: white,
          flexDirection: "row",
          justifyContent: "space-between",
          width: SizeRpScreen.width(100),
          height: SizeRpScreen.width(10),
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: grey800
        }}
      >
        {leftHeader()}
        {midHeader()}
        {rightHeader()}
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle={"dark-content"} />
      {useHeader && renderHeader()}
      {useLinearGradient ? <LinearGradient
        colors={linearGradientApp}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={[styles.containerContent]}
      >
        <ScrollView>
          {children}
        </ScrollView>
      </LinearGradient> :
        <View style={[styles.containerContent, { backgroundColor: colorApp.backgroundColor }]}>
          <ScrollView>
            {children}
          </ScrollView>
        </View>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "flex-start"
  },
  containerContent: {
    flex: 1
  }
});
export { AppContainerScroll };

