import { green200 } from '@css/Color';
import { AppContainer } from '@element/AppContainer';
import { AppText } from '@element/AppText';
import { DebounceButton } from '@element/DebounceButton';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, DeviceEventEmitter, StyleSheet } from 'react-native';
import BarcodeEvent from './BarcodeEvent';
import { RNUsbModule } from './BarcodeModule';
import ParseBarcode from './ParseBarcode';

const PDAScanner = (props) => {
    const [dsasd, setState] = useState("");
    const barCodePDA = useRef("");
    useEffect(() => {
        configPDA();
    }, []);

    useEffect(() => {
        console.log("????")
    }, [dsasd])


    //Cấu hình máy quét PDA:
    const configPDA = () => {
        props.navigation.addListener('focus', () => {
            console.log("Vào màn này");
            DeviceEventEmitter.addListener(BarcodeEvent.onReceive, (e) => {
                if (e.data && e.data != "") {
                    const checkBarCodeInfo = ParseBarcode(e.data);
                    if (checkBarCodeInfo) {
                        checkBarCodePDAScanner(checkBarCodeInfo.data)
                    } else {
                        Alert.alert("Mã QR đang không đúng định dạng.", "Vui lòng kiểm tra lại!");
                    }
                } else {
                    Alert.alert("Mã QR đang không đúng định dạng.", "Vui lòng kiểm tra lại!");
                }
            });
        });
    };

    const checkBarCodePDAScanner = (barCode) => {
        console.log("barCode", barCode);
        setState(barCode)
    }

    //Test PDA:
    const pressTestScannerBarCodeByPDA = () => {
        // testBacodeModuleConnect();
        RNUsbModule.testPushData(`MVD12316273${Math.floor(Math.random() * 1000)}`);
        // PDAModule.testPushData("245677");
        // const arr = ["245677", "OIUYYTT", "HGFFFY", "KHGFHH", "HGFGGY"];
        // PDAModule.testPushData(arr[testPDA.current]);
        // testPDA.current++
    }

    return (
        <AppContainer
            useHeader={false}
            nameScreen={props.nameScreen}
            goBackScreen={false}
            flexWrapHeader
        >
            <AppText>{barCodePDA.current}</AppText>
            <DebounceButton
                style={{ backgroundColor: green200, marginTop: SizeRpScreen.height(45), alignSelf: "center" }}
                useLoading={false}
                useDelay={false}
                onPress={pressTestScannerBarCodeByPDA}>
                <AppText style={{}}>Test Máy quét PDA Native Android</AppText>
            </DebounceButton>
        </AppContainer>
    );
}

const styles = StyleSheet.create({})

export default PDAScanner;
