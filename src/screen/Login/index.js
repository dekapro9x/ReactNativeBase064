import { keyAsyncStorage } from "@const/KeySyncStorage";
import { ContextContainer } from "@context/AppContext";
import { red400, white } from "@css/Color";
import { AppCheckbox } from "@element/AppCheckBox";
import { AppIcon } from "@element/AppIcon";
import { AppImage } from "@element/AppImage";
import { AppText } from "@element/AppText";
import { AppTextInput } from "@element/AppTextInput";
import { DebounceButton } from "@element/DebounceButton";
import { useForceUpdate } from "@hooks/forceUpdate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { PlatFormUsingConnect } from "../../const/Setting";
import { FontAppType } from "../../const/TypeFontFamily";
import { AppContainer } from "../../element/AppContainer";
import { keyNavigation } from "../../navigation/KeyNavigations";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";

export default function Login({ navigation, router }) {
  const { logoApp } = useContext(ContextContainer);
  const [userName, setStateUserName] = useState("");
  const [passWord, setStatePassWord] = useState("");
  const [rememberAccount, setStateRememberAccount] = useState(false);
  const renderNow = useForceUpdate();

  useEffect(() => {
    getAccountRemember();
  }, []);

  const getAccountRemember = async () => {
    const accountRemember = JSON.parse(
      await AsyncStorage.getItem(keyAsyncStorage.accountLogin)
    );
    if (
      accountRemember &&
      accountRemember.userName &&
      accountRemember.passWord &&
      accountRemember.rememberStatus
    ) {
      const { userName, passWord, rememberStatus } = accountRemember;
      setStateUserName(userName);
      setStatePassWord(passWord);
      setStateRememberAccount(rememberStatus);
    }
  };

  const navigateHome = () => {
    navigation.replace(keyNavigation.ROOT_STACK_BOTTOM);
  };

  const navigateRegister = () => {
    navigation.navigate(keyNavigation.REGISTER);
  };

  const onpressCheckBox = ({ idElementCheckbox, isChecked }) => {
    setStateRememberAccount(isChecked);
  };

  //Liên kết bằng tài khoản mạng xã hội:
  const pressConnectUsing = keyConnect => () => {
    console.log("keyConnect", keyConnect);
  };

  const onChangeText = (keyState, value) => {
    switch (keyState) {
      case "UserName":
        setStateUserName(value);
        break;
      case "Password":
        setStatePassWord(value);
        break;
    }
  };

  const checkRememberAccount = async () => {
    const account = {
      userName: userName,
      passWord: passWord,
      rememberStatus: rememberAccount
    };
    if (rememberAccount) {
      await AsyncStorage.setItem(
        keyAsyncStorage.accountLogin,
        JSON.stringify(account),
        () => {
          navigateHome();
        }
      );
    } else {
      await AsyncStorage.removeItem(keyAsyncStorage.accountLogin, () => {
        navigateHome();
      });
    }
  };

  const pressLogin = () => {
    if (validateAccount()) {
      checkRememberAccount();
    }
  };

  const validateAccount = () => {
    if (!userName) {
      Alert.alert("Đăng nhập không chính xác", "Tài khoản là bắt buộc");
      return false;
    }
    if (!passWord) {
      Alert.alert("Đăng nhập không chính xác", "Mật khẩu là bắt buộc");
      return false;
    }
    if (userName && passWord) {
      return true;
    }
  };

  const renderListPlatformConnectUsing = () => {
    return (
      <View style={styles.containerOsConnectUsing}>
        {PlatFormUsingConnect.map((oSConnect, index) => {
          return (
            <DebounceButton
              useDelay
              useLoading={true}
              onPress={pressConnectUsing(oSConnect.name)}
              key={`${index}`}
              style={[
                styles.oSConnectItem,
                { backgroundColor: oSConnect.backgroundColor }
              ]}
            >
              <AppIcon
                type={oSConnect.iconType}
                name={oSConnect.iconName}
                size={24}
                color={white}
              />
            </DebounceButton>
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View style={[styles.containerContent]}>
        {/* IconApp */}
        <View style={styles.appIconContainer}>
          <AppImage
            source={{
              uri: logoApp
            }}
            resizeMode="stretch"
            style={{
              height: SizeRpScreen.width(20),
              width: SizeRpScreen.width(20)
            }}
          />
        </View>
        {/* Form nhập tài khoản */}
        <View style={styles.containerFormInput}>
          <AppText style={styles.textTitle}>
            Well come to React Native Base
          </AppText>
          <AppText style={[styles.textTitle, { fontSize: 14 }]}>
            Discovery Every Thing Around You!
          </AppText>
          <AppTextInput
            value={userName}
            useClean={true}
            keyState={"UserName"}
            titleTextInput={"UserName"}
            placeholder={"UserName"}
            styleContainer={styles.textInput}
            styleTitle={styles.textTitleInput}
            onChangeText={onChangeText}
          />
          <AppTextInput
            value={passWord}
            secureTextEntry={true}
            useClean={true}
            keyState={"Password"}
            titleTextInput={"Password"}
            placeholder={"Password"}
            styleContainer={styles.textInput}
            styleTitle={styles.textTitleInput}
            onChangeText={onChangeText}
          />
          {/* Ghi nhớ đăng nhập */}
          <View style={[styles.rememberLoginContainer]}>
            <AppCheckbox
              sizeIcon={26}
              onpressCheckBox={onpressCheckBox}
              isCheckbox={rememberAccount}
              idElementCheckbox={"RememberAccount"}
              containerStyle={{
                backgroundColor: white,
                marginRight: SizeRpScreen.width(12)
              }}
              labelComponent={
                <AppText
                  style={[
                    styles.textTitle,
                    {
                      fontSize: 14,
                      marginTop: 12,
                      color: red400
                    }
                  ]}
                >
                  ____Remember____
                </AppText>
              }
            />
          </View>
          {/* Đăng kí tài khoản */}
          <AppText
            onPress={navigateRegister}
            style={[
              styles.textTitle,
              { fontSize: 14, marginTop: 12, color: red400 }
            ]}
          >
            _______________Register_______________
          </AppText>
          <AppText
            style={[
              styles.textTitle,
              {
                fontSize: 14,
                marginTop: 12,
                color: red400,
                fontFamily: FontAppType.MotoyaLMaru,
                fontWeight: "bold"
              }
            ]}
          >
            __________________Or Connect Using__________________
          </AppText>
          {/* Danh sách các nền tảng có thể kết nối ứng dụng */}
          {renderListPlatformConnectUsing()}
        </View>
        <DebounceButton
          useLoading={true}
          useDelay={false}
          onPress={pressLogin}
          loadingColor="#FFFFFF"
          title={"Login"}
          textStyle={{
            color: "#FFFFFF",
            fontSize: SizeRpScreen.H5 * 1.2,
            fontWeight: "bold",
            textAlign: "center"
          }}
          style={{
            backgroundColor: "#06B050",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 12,
            marginBottom: 12
          }}
        />
      </View>
    );
  };

  return (
    <AppContainer nameScreen={""} goBackScreen={false} flexWrapHeader>
      {renderContent()}
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  linearGradientContainer: {
    flex: 1
  },
  containerFormInput: {
    flex: 1,
    minHeight: SizeRpScreen.width(65),
    backgroundColor: "#781E3A",
    marginTop: 12,
    borderRadius: 12
  },
  appIconContainer: {
    height: SizeRpScreen.width(20),
    width: SizeRpScreen.width(20),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    backgroundColor: "#D64BFE"
  },
  textTitle: {
    fontSize: SizeRpScreen.H4,
    color: white,
    fontFamily: FontAppType.LetterMagic,
    alignSelf: "center"
  },
  textTitleInput: {
    fontFamily: FontAppType.LetterMagic,
    fontSize: 12
  },
  containerOsConnectUsing: {
    height: 60,
    flexDirection: "row",
    width: SizeRpScreen.width(80),
    alignSelf: "center",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center"
  },
  oSConnectItem: {
    height: 50,
    width: 50,
    backgroundColor: white,
    borderRadius: 12
  },
  textInput: {
    width: SizeRpScreen.width(90),
    marginTop: 12,
    alignSelf: "center",
    marginHorizontal: 8
  },
  rememberLoginContainer: {
    width: SizeRpScreen.width(100),
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
