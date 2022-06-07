import AppLinearGradient from '@element/AppLinearGradient';
import { AppRecordSoundTouch } from '@element/AppRecordSoundTouch';
import React from 'react';
import { StyleSheet } from 'react-native';

const RecordSoundTouch = () => {
    return (
        <AppLinearGradient style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <AppRecordSoundTouch></AppRecordSoundTouch>
        </AppLinearGradient>
    );
}

const styles = StyleSheet.create({})

export default RecordSoundTouch;
