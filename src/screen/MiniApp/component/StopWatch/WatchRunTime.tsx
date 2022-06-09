import { AppText } from '@element/AppText';
import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import PropTypes from 'prop-types';
import { SizeRpScreen } from '@resources/ResponsiveScreen';

interface State {
    startWatch: Boolean,
    second: number,
    minute: number,
    house: number,
    currentTime: string
}
const WatchRunTime = (props: any) => {

    const [state, setState] = useState<State>({
        startWatch: false,
        second: 0,
        minute: 0,
        house: 0,
        currentTime: "00:00:00",
    });
    let countTimeInterval = useRef(0);
    const startTime = () => {
        let countTimeReset = 0;
        let countTime = 0;
        if (!state.startWatch) {
            setState((state) => ({ ...state, startWatch: true }));
            countTimeInterval.current = setInterval(() => {
                countTimeReset++;
                if (countTimeReset >= 100) {
                    countTimeReset = 0;
                    countTime += 1;
                    setState((state) => ({ ...state, second: countTimeReset, minute: countTime }));
                } else {
                    setState((state) => ({ ...state, second: countTime }))
                }
            }, 10);
        } else {
            clearInterval(countTimeInterval.current);
            setState((state) => ({ ...state, startWatch: false, second: 0, minute: 0, house: 0 }));
        }
    }

    return (
        <View style={styles.container}>
            <AppText style={{}}>WatchRunTime</AppText>
            <AppText style={{}}>Second:{state.second}</AppText>
            <AppText style={{}}>Minute:{state.minute}</AppText>
            <AppText style={{}}>House:{state.house}</AppText>
            <TouchableOpacity
                onPress={startTime}
                style={{ height: 50, width: 50, backgroundColor: "blue", borderRadius: 25 }}>
            </TouchableOpacity>
        </View>
    );
}

WatchRunTime.propTypes = {
    // startTime: PropTypes.func.isRequired,
    // stopTime: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
    container: { width: SizeRpScreen.device_width, backgroundColor: "red", alignItems: 'center' }
})

export default WatchRunTime;
