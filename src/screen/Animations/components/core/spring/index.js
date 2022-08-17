import { ContextContainer } from "@context/AppContext";
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FreeFallBall from "./FreeFallBall";
const SpringAnimatedComponent = () => {
    const { colorApp } = useContext(ContextContainer);

    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: colorApp.backgroundColor }]}>
                <FreeFallBall></FreeFallBall>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { minHeight: SizeRpScreen.height(100), width: SizeRpScreen.width(100) }
})

export { SpringAnimatedComponent };

