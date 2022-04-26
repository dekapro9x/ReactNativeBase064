import { ContextContainer } from "@context/AppContext";
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { OpacityAnimations } from "./OpacityAnimations";
import { SpinAnimations } from "./SpinAnimations";
import { LongShortAnimations } from "./LongShortAnimations";
import { MarginLeftAnimations } from "./MarginLeftAnimations";
import { OpacityAnimationsInterpolate } from "./OpacityAnimationsInterpolate";
import { BaseAnimations } from "./BaseAnimations";
const TimingAnimatedComponent = () => {
    const { colorApp } = useContext(ContextContainer);

    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: colorApp.backgroundColor, paddingBottom: 120 }]}>
                <SpinAnimations />
                <OpacityAnimations />
                <LongShortAnimations />
                <OpacityAnimationsInterpolate />
                <MarginLeftAnimations />
                <BaseAnimations />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { minHeight: SizeRpScreen.height(100), width: SizeRpScreen.width(100) }
})

export { TimingAnimatedComponent };

