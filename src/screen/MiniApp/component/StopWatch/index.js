import { AppText } from '@element/AppText';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import WatchRunTime from './WatchRunTime';

const StopWatch = () => {

    return (
        <View>
            <AppText style={{ }}>StopWatch</AppText>
            <WatchRunTime ></WatchRunTime>
        </View>
    );
}

const styles = StyleSheet.create({})

export default StopWatch;
