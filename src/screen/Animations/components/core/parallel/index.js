import { ContextContainer } from "@context/AppContext";
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BallRunScale from "./BallRunScale";
const ParallelAnimations = () => {
    const { colorApp } = useContext(ContextContainer);

    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: colorApp.backgroundColor }]}>
                <BallRunScale></BallRunScale>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { minHeight: SizeRpScreen.height(100), width: SizeRpScreen.width(100) }
})

export { ParallelAnimations };

