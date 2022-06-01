import { AppText } from '@element/AppText';
import { readLogSystem, removeFile, writeLogSystem } from '@logEventSystem/';
import { keyLogSystem } from '@logEventSystem/keyLogSystem';
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { AppContainer } from "../../element/AppContainer";
const RNFS = require('react-native-fs');

function InfoDevicesApp({ navigation, router }) {
    const [log, stateLog] = useState("");

    useEffect(() => {
        readFileLog();
    }, [])

    const logFileSystem = async () => {
        await writeLogSystem(keyLogSystem.testClick, "Write file log System!");
        readFileLog();
    }

    const readFileLog = async () => {
        const logFile = await readLogSystem();
        if (logFile) {
            stateLog(logFile);
        }
    }

    const removeFileLog = () => {
        Alert.alert("Remove file log!", "", [{ text: "No", onPress: () => { } }, { text: "Yes", onPress: () => { confirmRemoveFileLog() } }])
    }

    const confirmRemoveFileLog = () => {
        const path = RNFS.DocumentDirectoryPath + 'logSystem.txt';
        removeFile(path);
        stateLog("");
    }

    const renderListButton = () => {
        const arrButton = [
            { id: 1, name: "Write", color: "red", onPress: () => { logFileSystem() } },
            // { id: 2, name: "Read", color: "blue", onPress: () => { readFileLog() } },
            { id: 3, name: "Remove", color: "green", onPress: () => { removeFileLog() } }];
        return arrButton.map((item, index) => {
            return (
                <TouchableOpacity
                    key={`${index}`}
                    onPress={item.onPress}
                    style={{ flex: 1, borderWidth: 1, borderColor: "black", backgroundColor: item.color, alignItems: "center", justifyContent: "center" }}>
                    <AppText style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>{item.name}</AppText>
                </TouchableOpacity>
            )
        })
    }

    const renderContent = () => {
        return (
            <ScrollView >
                <AppText>{log}</AppText>
            </ScrollView>
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
            <View style={{
                height: 40,
                position: 'absolute',
                width: SizeRpScreen.device_width,
                flexDirection: "row",
                bottom: 0
            }}>
                {renderListButton()}
            </View>
        </AppContainer>
    );
}
export default React.memo(InfoDevicesApp);

const styles = StyleSheet.create({
    containerContent: {
        minHeight: SizeRpScreen.device_height,
        minWidth: SizeRpScreen.device_width,
        alignItems: "center",
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
