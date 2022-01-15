import { ContextContainer } from '@context/AppContext';
import { white } from '@css/Color';
import { AppImage } from '@element/AppImage';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

export default function BannerHome() {
    const { colorApp } = useContext(ContextContainer);
    return (
        <View style={[styles.container, { backgroundColor: colorApp.backgroundColor }]}>
            <AppImage
                resizeMode={"center"}
                source={require("../../../images/BannerHome.png")}
                style={styles.banner}>
            </AppImage>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        height: SizeRpScreen.width(100) * 9 / 16,
        width: SizeRpScreen.width(100),
    }
})
