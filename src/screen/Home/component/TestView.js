import { AppTextLanguageI18n } from "@element/AppTextLanguageI18n";
import MaterialRipple from "@libJS/material-ripple";
import actions from "@redux/actions";
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect, useDispatch } from "react-redux";
const Testview = ({ languageCurrent }) => {
    const dispatch = useDispatch();
    const test = async () => {
        await dispatch(actions.changeLanguages("Eng"))
    }
    return (
        <View style={{ height: 500, width: SizeRpScreen.device_width, backgroundColor: "red" }}>
            <MaterialRipple
                onPress={test}
                rippleDuration={2400}
                style={{ flex: 1, width: SizeRpScreen.device_width, alignItems: 'center', justifyContent: 'center' }}>
                <AppTextLanguageI18n i18nKey={"greeting"} />
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