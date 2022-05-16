import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, NativeModules } from 'react-native';
import { AppHeaderSub } from "@element/AppHeaderSub";
const LifeCycleAndroid = () => {
    const [nameNativeModule, setStateNameNativeModule] = useState("");
    useEffect(() => {
        getNameNativeModule();
        return () => {
        };
    }, []);

    const getNameNativeModule = () => {
        const nameScreen = NativeModules.LifeCycleModule.getNameNativeModule();
        setStateNameNativeModule(nameScreen);
    }

    return (
        <View style={styles.container}>
            <AppHeaderSub subName={nameNativeModule}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default LifeCycleAndroid;
