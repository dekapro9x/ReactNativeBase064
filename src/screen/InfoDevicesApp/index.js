import { GetDevicesInfo, GetDevicesIP, VersionApp, VersionCodePush } from "@const/Setting";
import { FontAppType } from "@const/TypeFontFamily";
import { AppText } from "@element/AppText";
import Wave from "@libJS/react-native-waveview";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import { goBack } from "@services/NavigationService";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AppContainer } from "../../element/AppContainer";
import codePush from 'react-native-code-push'
import { AppIcon } from "@element/AppIcon";
import { green400 } from "@css/Color";

function InfoDevicesApp({ navigation, router }) {
    const [IP, setStateIP] = useState("");
    const [msg, setStateMsg] = useState("");
    useLayoutEffect(() => {
        getdeivicesID();
        return () => { };
    }, []);

    useEffect(() => { }, []);

    const getdeivicesID = async () => {
        const ip = await GetDevicesIP();
        setStateIP(ip);
    }

    const codePushStatusDidChange = (status) => {
        switch (status) {
            case codePush.SyncStatus.CHECKING_FOR_UPDATE:
                setStateMsg("Checking for updates");
                break;
            case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                setStateMsg("Downloading package");
                break;
            case codePush.SyncStatus.INSTALLING_UPDATE:
                setStateMsg("Installing update");
                break;
            case codePush.SyncStatus.UP_TO_DATE:
                setStateMsg("Up-to-date (New Versions)");
                break;
            case codePush.SyncStatus.UPDATE_INSTALLED:
                setStateMsg("Update installed");
                break;
        }
    }

    const codePushDownloadProgress = (progress) => {
        console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
    }

    const checkVersionCodePush = () => {
        codePush.sync({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE },
            (status) => {
                codePushStatusDidChange(status)
            },
            (progress) => {
                codePushDownloadProgress(progress)
            }
        );
    }

    const renderContent = () => {
        return (
            <TouchableOpacity
                onPress={goBack}
                activeOpacity={0.8}
                style={[styles.containerContent]}>
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
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>Version Code Push:   {VersionCodePush}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>ApplicationName:   {GetDevicesInfo.getAppName}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>DeviceId:   {GetDevicesInfo.getDeviceId}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>DeviceType:   {GetDevicesInfo.getDeviceType}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>SystemName:   {GetDevicesInfo.getSystemName}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>Version:   {GetDevicesInfo.getVersion}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>Ip:   {IP}</AppText>
                    <AppText style={{ marginTop: 12 }} fontFamily={FontAppType.Happy}>Ip:   {msg}</AppText>
                </View>
                <TouchableOpacity
                    onPress={checkVersionCodePush}
                    style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 5, borderColor: green400, backgroundColor: "red", position: "absolute", right: SizeRpScreen.width(4), bottom: SizeRpScreen.height(20), alignItems: "center", justifyContent: "center" }}>
                    <AppIcon style={{marginLeft:7 }} type={"Entypo"} name={"download"} color={"white"} sizeIcon={25}> </AppIcon>
                </TouchableOpacity>
            </TouchableOpacity >
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
