import { readLogSystem, writeLogSystem, removeFile } from '@logEventSystem/';
import { keyLogSystem } from '@logEventSystem/keyLogSystem';
const RNFS = require('react-native-fs');
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import { AppHeaderSub } from "@element/AppHeaderSub";
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import { AppText } from '@element/AppText';
const WriteTxt = () => {
    const [log, stateLog] = useState("");
    const refScrollView = useRef({});

    useEffect(() => {
        readFileLog();
    }, [])

    const logFileSystem = () => {
        writeLogSystem(keyLogSystem.testClick, "Write file log System!");
        readFileLog();
        refScrollView.current.scrollToEnd();
    }

    const readFileLog = async () => {
        const logFile = await readLogSystem();
        if (logFile) {
            stateLog(logFile);
        }
    }

    const confirmRemoveFileLog = () => {
        const path = RNFS.DocumentDirectoryPath + 'logSystem.txt';
        removeFile(path);
        stateLog("");
    }

    const removeFileLog = () => {
        Alert.alert("Remove file log!", "", [{ text: "No", onPress: () => { } }, { text: "Yes", onPress: () => { confirmRemoveFileLog() } }])
    }

    const renderListButton = () => {
        const arrButton = [
            { id: 1, name: "Write", color: "red", onPress: () => { logFileSystem() } },
            { id: 2, name: "Read", color: "blue", onPress: () => { readFileLog() } },
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeaderSub subName={"Log System"} />
            <ScrollView ref={refScrollView}>
                <AppText>{log}</AppText>
            </ScrollView>
            <View style={{
                height: 40,
                position: 'absolute',
                width: SizeRpScreen.device_width,
                flexDirection: "row",
                bottom: 60
            }}>
                {renderListButton()}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default WriteTxt;
