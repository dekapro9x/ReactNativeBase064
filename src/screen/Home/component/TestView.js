import MaterialRipple from "@libJS/material-ripple";
import actions from "@redux/actions";
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import I18n, { getLanguages } from 'react-native-i18n';
import { useDispatch } from "react-redux";
import {AppTextLanguageI18n} from "@element/AppTextLanguageI18n";
const Testview = ({ languageCurrent }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getLanguages().then(languages => {
            console.log(languages); // ['en-US', 'en']
        });
    }, [])
    I18n.fallbacks = true;
    I18n.translations = {
        en: {
            greeting: 'Hi!',
        },
        fr: {
            greeting: 'Bonjour!',
        },
    };
    const dispatchActionsChangeLanguage = async () => {
        let typeLanguageOnChange = "Eng";
        console.log("dispatchActionsChangeLanguage");
        await dispatch(actions.changeLanguages(typeLanguageOnChange));
    }
    return (
        <View style={{ height: 500, width: SizeRpScreen.device_width, backgroundColor: "red" }}>
            <MaterialRipple
                onPress={dispatchActionsChangeLanguage}
                rippleDuration={2400}
                style={{ flex: 1, width: SizeRpScreen.device_width, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{I18n.t('greeting')}--- {languageCurrent}</Text>
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