import { isAndroid } from '@const/Setting';
import { green400 } from '@css/Color';
import { AppText } from '@element/AppText';
import React, { useEffect, useState } from 'react';
import { Alert, NativeEventEmitter, NativeModules, PermissionsAndroid, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

const ReadSMS = () => {

  const [pingSms, setStatePingSms] = useState("Ping Listen SMS:...Loading...");
  useEffect(() => {
    checkPermissionSMSPermissionAndroid();
    return () => {
      stopReadSmsAndroid();
    }
  }, []);


  const checkPermissionSMSPermissionAndroid = async () => {
    if (isAndroid) {
      const checkPerSms = await SMSPermissionAndroid();
      if (checkPerSms) {
        startReadSmsAndroid(checkPerSms);
      }
    }
  }

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

  const sentSms = () => {
    console.log("Sent SMS");
  }

  return (
    <View>
      <AppText style={{ fontSize: 16, textAlign: 'center' }}>{pingSms}</AppText>
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
        <AppText>Test Sent SMS</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({})

export default ReadSMS;
