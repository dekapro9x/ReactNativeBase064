import React, { useContext, useEffect, useLayoutEffect } from "react";
import { StyleSheet, View, ScrollView, Linking } from "react-native";
import { black, deepPurpleA400 } from "../../const/Color";
import { FontAppType } from "../../const/TypeFontFamily";
import { ContextContainer } from "../../context/AppContext";
import { AppContainer } from "../../element/AppContainer";
import AppTextTicker from "../../element/AppTextTicker";
import { DebounceButton } from "../../element/DebounceButton";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";
import RenderHtml from "react-native-render-html";
import { sourceHTML } from "./HtmlPolicy";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { keyAsyncStorage } from "../../const/KeySyncStorage";
import { keyNavigation } from "../../navigation/KeyNavigations";
function Policy({ navigation, router }) {
  const { colorApp } = useContext(ContextContainer);

  useLayoutEffect(() => {
    checkAgreePolicy();
    return () => {};
  }, []);

  useEffect(() => {}, []);

  //Kiểm tra đã đồng ý điều khoản sử dụng chưa?
  const checkAgreePolicy = async () => {
    const checkPolicy = await AsyncStorage.getItem(
      keyAsyncStorage.agreePolicyClick
    );
    if (checkPolicy) {
      navigateHomeScreen();
    }
    return true;
  };

  //Đồng ý với điều khoản sử dụng:
  const pressAgreePolicy = async () => {
    const agreePolicy = "AGREE_POLICY";
    await AsyncStorage.setItem(
      keyAsyncStorage.agreePolicyClick,
      JSON.stringify(agreePolicy)
    );
    navigateHomeScreen();
  };

  //Điều hướng đến màn hình Home:
  const navigateHomeScreen = () => {
    // navigation.navigate(keyNavigation.HOME);
    navigation.replace(keyNavigation.HOME);
  };

  //Chuyển đổi định dạng thẻ HTML:
  const convertHtmlContent = content => {
    const customContent = content
      ? `${content}`
          .replace(/(<p><em>)/gm, "<em>")
          .replace(/(<\/p><\/em>)/gm, "</em>")
          .replace(/(<p><i>)/gm, "<i>")
          .replace(/(<\/p><\/i>)/gm, "</i>")
          .replace(/(\r\n)/gm, "")
      : "";
    return { html: `<div>${customContent}</div>` };
  };

  //Hiển thị HTML:
  const renderContent = () => {
    if (checkAgreePolicy()) {
      return null;
    } else {
      {
        return (
          <View style={styles.container}>
            <AppTextTicker
              style={styles.textTicker}
              duration={12000}
              loop
              bounce
              repeatSpacer={100}
              marqueeDelay={0}
            >
              Made by BeoTran ( Contact: dekapro9x@gmail.com - 0962294434 )
            </AppTextTicker>
            {/* Khung ô vuông */}
            <View style={styles.windowsHTML}>
              {/* HTML */}
              <ScrollView>
                <RenderHtml
                  tagsStyles={{
                    a: styles.tagA,
                    h6: styles.tagH6,
                    div: styles.tagDiv,
                    p: styles.tagP,
                    em: styles.tagEm,
                    i: styles.tagI
                  }}
                  contentWidth={{ width: SizeRpScreen.width(98) }}
                  source={convertHtmlContent(sourceHTML.html)}
                  imagesMaxWidth={SizeRpScreen.width(95)}
                  onLinkPress={(e, href) => {
                    Linking.canOpenURL(href).then(supported => {
                      if (supported) {
                        Linking.openURL(href);
                      } else {
                        openUlrBrowser(href);
                      }
                    });
                  }}
                />
              </ScrollView>
            </View>
            {/* Nút đồng ý điều khoản sử dụng */}
            <DebounceButton
              useDelay={true}
              onPress={pressAgreePolicy}
              loadingColor="#FFFFFF"
              title={"Tôi đồng ý với điều khoản sử dụng"}
              textStyle={{
                color: "#FFFFFF",
                fontSize: SizeRpScreen.H5 * 1.2,
                fontWeight: "bold",
                textAlign: "center"
              }}
              style={{
                backgroundColor: "#06B050",
                justifyContent: "center",
                alignItems: "center"
              }}
            />
          </View>
        );
      }
    }
  };

  return (
    <AppContainer
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
      style={{ backgroundColor: colorApp.backgroundColor }}
    >
      {renderContent()}
    </AppContainer>
  );
}
export default React.memo(Policy);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SizeRpScreen.width(100),
    alignItems: "center"
  },
  textTicker: {
    fontSize: 12,
    color: black,
    fontFamily: FontAppType.Happy
  },
  windowsHTML: {
    flex: 1,
    backgroundColor: "#FDE7E9",
    width: SizeRpScreen.width(98),
    borderWidth: SizeRpScreen.width(2),
    borderColor: deepPurpleA400
  },
  tagH6: {
    lineHeight: 20,
    fontSize: SizeRpScreen.H5 * 1.15,
    fontFamily: FontAppType.Blacklight
  },
  tagDiv: {
    overflow: "hidden"
  },
  tagP: {
    lineHeight: 36,
    fontSize: SizeRpScreen.H4,
    fontFamily: FontAppType.Blacklight,
    color: "#4D4D4D"
  },
  tagEm: {
    fontSize: SizeRpScreen.H4,
    fontStyle: FontAppType.Blacklight,
    color: "#4D4D4D"
  },
  tagI: {
    fontSize: SizeRpScreen.H4,
    fontStyle: FontAppType.Blacklight,
    color: "#4D4D4D"
  },
  tagA: {
    color: "red",
    textAlign: "center"
  }
});
