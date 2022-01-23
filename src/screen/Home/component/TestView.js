import MaterialRipple from "@libJS/material-ripple";
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Testview = () => {
    return (
        <View style={{ height: 500, width: SizeRpScreen.device_width, backgroundColor: "red" }}>
            <MaterialRipple
                rippleDuration={2400}
                style={{ flex: 1, width: SizeRpScreen.device_width, alignItems: 'center', justifyContent: 'center' }}>
 
            </MaterialRipple>
        </View>
    );
}

const styles = StyleSheet.create({
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
})

export default Testview;
const fadeIn = {
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    },
};