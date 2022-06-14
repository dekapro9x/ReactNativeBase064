import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import EasyGridTable from "./EasyGridTable";

const Table = () => {
    return (
        <View style={{ height: SizeRpScreen.device_height, width: SizeRpScreen.device_width }}>
            <EasyGridTable></EasyGridTable>
        </View>
    );
}

const styles = StyleSheet.create({})

export { Table };

