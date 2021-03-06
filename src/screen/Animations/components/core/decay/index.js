import { ContextContainer } from "@context/AppContext";
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BallClickRun } from "./BallClickRun";
import { BallClickFly } from "./BallClickFly";
const DecayAnimatedComponent = () => {
    const { colorApp } = useContext(ContextContainer);

    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: colorApp.backgroundColor, paddingBottom: 120 }]}>
                <BallClickRun />
                <BallClickFly />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { minHeight: SizeRpScreen.height(100), width: SizeRpScreen.width(100) }
})

export { DecayAnimatedComponent };

