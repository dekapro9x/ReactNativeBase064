import { GetDevicesInfo, GetDevicesIP, VersionApp } from "@const/Setting";
import { FontAppType } from "@const/TypeFontFamily";
import { AppText } from "@element/AppText";
import Wave from "@libJS/react-native-waveview";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppContainer } from "../../element/AppContainer";


function InfoDevicesApp({ navigation, router }) {
    const [IP, setStateIP] = useState("");
    useLayoutEffect(() => {
        getdeivicesID();
        return () => { };
    }, []);

    useEffect(() => { }, []);

    const getdeivicesID = async () => {
        const ip = await GetDevicesIP();
        setStateIP(ip);
    }


    const renderContent = () => {
        return (
            <View style={[styles.containerContent]}>
                <View>
                    <Wave
                        style={styles.waveBall}
                        H={45}
                        waveParams={[
                            { A: 10, T: 180, fill: '#62c2ff' },
                            { A: 15, T: 140, fill: '#0087dc' },
                            { A: 20, T: 100, fill: '#1aa7ff' },
                        ]}
                        animated={true}
                    />
                </View>
                <View style={{ minHeight: SizeRpScreen.device_height / 2 - 32, width: SizeRpScreen.device_width - 32, marginBottom: 12, marginTop: 12 }}>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>Version App:   {VersionApp}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>ApplicationName:   {GetDevicesInfo.getAppName}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>DeviceId:   {GetDevicesInfo.getDeviceId}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>DeviceType:   {GetDevicesInfo.getDeviceType}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>SystemName:   {GetDevicesInfo.getSystemName}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>Version:   {GetDevicesInfo.getVersion}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>Ip:   {IP}</AppText>
                </View>
            </View>
        );
    };

    return (
        <AppContainer
            useLinearGradient={false}
            nameScreen={""}
            goBackScreen={false}
            flexWrapHeader
        >
            {renderContent()}
        </AppContainer>
    );
}
export default React.memo(InfoDevicesApp);

const styles = StyleSheet.create({
    containerContent: {
        minHeight: SizeRpScreen.device_height,
        minWidth: SizeRpScreen.device_width,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
    },
    wave: {
        width: 100,
        aspectRatio: 1,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    waveBall: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50,
        overflow: 'hidden',
    }
});
