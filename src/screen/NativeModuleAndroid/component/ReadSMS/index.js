import { isAndroid } from '@const/Setting';
import { FontAppType } from '@const/TypeFontFamily';
import { green400, greenA400 } from '@css/Color';
import { AppText } from '@element/AppText';
import { AppTextInput } from '@element/AppTextInput';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect, useState } from 'react';
import { Alert, Linking, NativeEventEmitter, NativeModules, PermissionsAndroid, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

const ReadSMS = () => {
  const [pingSms, setStatePingSms] = useState("Ping Listen SMS:...Click here...");
  const [numberPhoneCurrent, setStateNumberPhoneCurrent] = useState("191");
  useEffect(() => {
    checkPermissionSMSAndroid();
    checkPermissionReadPhoneAndroid();
    return () => {
      stopReadSmsAndroid();
    }
  }, []);

  //Kiểm tra quyền đọc tin nhắn Android:
  const checkPermissionSMSAndroid = async () => {
    if (isAndroid) {
      const checkPerSms = await SMSPermissionAndroid();
      if (checkPerSms) {
        startReadSmsAndroid(checkPerSms);
      }
    }
  }

  //Quyền tin nhắn Android:
  const SMSPermissionAndroid = async () => {
    if (Platform.Version < 23) {
      return true;
    }
    const hasReceiveSmsPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.RECEIVE_SMS
    );
    const hasReadSmsPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_SMS
    );
    if (hasReceiveSmsPermission && hasReadSmsPermission) {
      return true;
    }
    return false;
  }

  //Quyền đọc số sim:
  const checkPermissionReadPhoneAndroid = async () => {
    if (isAndroid) {
      const checkPerPhoneCurrent = await phoneCurrentPermissionAndroid();
      if (checkPerPhoneCurrent) {
        const phoneSim = NativeModules.SentSmsModule.getCurrentNumberPhone();
        console.log("Phone sim", phoneSim);
      }
    }
  }

  const phoneCurrentPermissionAndroid = async () => {
    if (Platform.Version < 23) {
      return true;
    }
    const hasReceiveSmsPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE
    );
    if (hasReceiveSmsPermission) {
      return true;
    }
    return false;
  }



  const startReadSmsAndroid = (isReadSms) => {
    if (isReadSms) {
      NativeModules.ReadSms.startReadSMS((result) => {
        console.log("result", result)
        new NativeEventEmitter(NativeModules.ReadSms)
          .addListener('received_sms', (sms) => {
            console.log("SMS", sms);
            Alert.alert("SMS", `${sms}`)
          })
      },
        (error) => { console.log("Lỗi đọc SMS", error) });
    } else {
      Alert.alert("", "Required RECEIVE_SMS and READ_SMS permission");
    }
  }

  const stopReadSmsAndroid = () => {
    if (isAndroid) {
      NativeModules.ReadSms.stopReadSMS();
    }
  }

  const pingSmsNativeModule = () => {
    const pingSmsModule = NativeModules.ReadSms.pingSmsModule();
    if (pingSmsModule) {
      setStatePingSms(pingSmsModule);
    }
  }

  const checkPermissionSentSms = async () => {
    if (Platform.Version < 23) {
      return true;
    }
    const hasReadSmsPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.SEND_SMS
    );
    if (hasReadSmsPermission) {
      return true;
    }
    return false;
  }

  const sentSms = () => {
    const checkSentSms = checkPermissionSentSms();
    if (checkSentSms) {
      NativeModules.SentSmsModule.sentSms(`${numberPhoneCurrent}`, "KTTK");
    } else {
      Alert.alert("Yêu cầu cấp quyền", "Vui lòng vào cài đặt cấp quyền gửi SMS!", [{
        text: "Hủy bỏ", onPress: () => { },
        text: "Cài đặt", onPress: () => {
          Linking.openSettings();
        },
      }])
    }
  }

  const onChangeText = (keyState, value) => {
    switch (keyState) {
      case "numberPhoneCurrent":
        setStateNumberPhoneCurrent(value);
        break;
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {/* Nhập số điện thoại cần nt */}
      <AppTextInput
        keyboardType={"numeric"}
        value={numberPhoneCurrent}
        useClean={true}
        keyState={"numberPhoneCurrent"}
        titleTextInput={"Gửi đến:"}
        placeholder={"phone"}
        styleContainer={styles.textInput}
        styleTitle={styles.textTitleInput}
        styleInput={{ backgroundColor: greenA400, borderRadius: 10 }}
        onChangeText={onChangeText} />
      {/* Ping Native */}
      <AppText style={{ fontSize: 16, textAlign: 'center', marginTop: 20 }}>{pingSms}</AppText>
      {/* Ping... */}
      <TouchableOpacity
        onPress={pingSmsNativeModule}
        style={{ height: 40, width: 250, marginTop: 12, borderRadius: 12, borderWidth: 2, borderColor: green400, alignItems: "center", justifyContent: "center" }}>
        <AppText  >Ping Native Module SMS</AppText>
      </TouchableOpacity>
      {/* Sent Sms Test */}
      <TouchableOpacity
        onPress={sentSms}
        style={{ height: 40, width: 250, borderRadius: 12, borderWidth: 2, borderColor: green400, alignItems: "center", justifyContent: "center", marginTop: 25 }}>
        <AppText>Request SMS</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: SizeRpScreen.width(90),
    marginTop: 12,
    alignSelf: "center",
    marginHorizontal: 8,
  },
  textTitleInput: {
    fontFamily: FontAppType.LetterMagic,
    fontSize: 12,
    color: "black"
  },
})

export default ReadSMS;
