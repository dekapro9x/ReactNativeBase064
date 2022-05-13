import { isAndroid } from '@const/Setting';
import React, { useEffect } from 'react';
import { Alert, NativeEventEmitter, NativeModules, PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native';

const ReadSMS = () => {
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
            Alert.alert("SMS",`${sms}`)
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


  return (
    <View>
      <Text>ReadSMS</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default ReadSMS;
