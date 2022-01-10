//Library:
import { useNavigation } from "@react-navigation/core";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { black, grey800, white } from "../const/Color";
import { ContextContainer } from "../context/AppContext";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { AppImage } from "./AppImage";
import { AppText } from "./AppText";

const AppContainer = props => {
  const { logoApp } = useContext(ContextContainer);
  const {
    children,
    style,
    goBackScreen,
    rightHeaderComponent,
    nameScreen,
    warningGoback,
    textWairning
  } = props;
  const navigation = useNavigation();
  const { goBack } = navigation;
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

  //Nút quay lại
  const leftHeader = () => {
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
              marginLeft:SizeRpScreen.width(2)
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
          <AppImage
          source={{
            uri: logoApp
          }}
          style={{
            height: SizeRpScreen.height(6),
            width: SizeRpScreen.width(20),
          }}
          resizeMode ="contain"
        /> }
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
         alignItems:"flex-end"
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
      {renderHeader()}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "flex-start"
  }
});
export { AppContainer };
