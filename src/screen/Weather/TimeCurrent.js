import { FontAppType } from '@const/TypeFontFamily';
import { pinkA400 } from '@css/Color';
import { AppText } from '@element/AppText';
import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';

const TimeCurrent = () => {
    const [timeCurrent, setStateTimeCurrent] = useState("");
    const timeCount = useRef(0);
    useEffect(() => {
        timeCount.current = setInterval(() => {
            getCurrentTime();
        }, 1000);
        return () => {
            clearInterval(timeCount.current)
        };
    }, []);

    const getCurrentTime = () => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        setStateTimeCurrent(`${time}`)
    }

    return (
        <View style={{}}>
            <AppText style={{ fontSize: 25, color: pinkA400 || "white", fontFamily: FontAppType.LetterMagic }}>
                {timeCurrent}
            </AppText>
        </View>
    );
}

const styles = StyleSheet.create({})

export default TimeCurrent;
