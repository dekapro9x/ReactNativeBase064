import { green200 } from '@css/Color';
import { AppText } from '@element/AppText';
import { DebounceButton } from '@element/DebounceButton';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { DeviceEventEmitter, NativeModules, StyleSheet, View } from 'react-native';
import { BarcodeDataType } from './BarcodeDataType';
import BarcodeEvent from './BarcodeEvent';
import ParseBarcode from './ParseBarcode';
// import { testBacodeModuleConnect } from "./BarcodeModule";
const { RNUsbModule } = NativeModules;

const PDAScannerQrCode = () => {
    const navigation = useNavigation();
    const [barCodeScanner, setStateBarCodeScanner] = useState("");

    useEffect(() => {
        configPDA();
        return () => {
        };
    }, []);

    //Test PDA:
    const pressTestScannerBarCodeByPDA = () => {
        // testBacodeModuleConnect();
        RNUsbModule.testPushData(`MVD12316273${Math.floor(Math.random() * 1000)}`);
        // PDAModule.testPushData("245677");
        // const arr = ["245677", "OIUYYTT", "HGFFFY", "KHGFHH", "HGFGGY"];
        // PDAModule.testPushData(arr[testPDA.current]);
        // testPDA.current++
    }

    //Cấu hình máy quét PDA:
    const configPDA = () => {
        DeviceEventEmitter.addListener(BarcodeEvent.onReceive, (e) => {
            if (e.data && e.data != "") {
                // RNUsbModule.playBeep();
                const checkBarCodeInfo = ParseBarcode(e.data);
                if (checkBarCodeInfo) {
                    if (checkBarCodeInfo && checkBarCodeInfo.type == BarcodeDataType.bill) {
                        checkBarcodePDA(checkBarCodeInfo.data);
                    }
                } else {
                    Alert.alert("Mã QR đang không đúng định dạng.", "Vui lòng kiểm tra lại!");
                }
            } else {
                Alert.alert("Mã QR đang không đúng định dạng.", "Vui lòng kiểm tra lại!");
            }
        });
    }

    const checkBarcodePDA = (QRCode) => {
        console.log("Bar Code Scanner", QRCode);
        setStateBarCodeScanner(QRCode)
    }

    return (
        <View>
            <AppText style={{ fontSize: 18, marginBottom: 50, color: "blue", textAlign: "center" }}>{barCodeScanner}</AppText>
            <DebounceButton
                style={{ backgroundColor: green200 }}
                useLoading={false}
                useDelay={false}
                onPress={pressTestScannerBarCodeByPDA}>
                <AppText style={{}}>Test Máy quét PDA Native Android</AppText>
            </DebounceButton>
        </View>
    );
}

const styles = StyleSheet.create({});

export { PDAScannerQrCode };

