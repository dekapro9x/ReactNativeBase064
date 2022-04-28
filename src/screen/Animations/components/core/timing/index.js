import { ContextContainer } from "@context/AppContext";
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { OpacityAnimations } from "./OpacityAnimations";
import { SpinAnimations } from "./SpinAnimations";
import { LongShortAnimations } from "./LongShortAnimations";
import { MarginLeftAnimations } from "./MarginLeftAnimations";
import { OpacityAnimationsInterpolate } from "./OpacityAnimationsInterpolate";
import { MovingMarginAnimations } from "./MovingMarginAnimations";
import { RotateOxAnimations } from "./RotateOxAnimations";
import { RotateOyAnimations } from "./RotateOyAnimations";
import { SizeTextAnimations } from "./SizeTextAnimations";
const TimingAnimatedComponent = () => {

    const { colorApp } = useContext(ContextContainer);
    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: colorApp.backgroundColor, paddingBottom: 120 }]}>
                <SpinAnimations />
                <OpacityAnimations />
                <LongShortAnimations />
                <SizeTextAnimations/>
                <OpacityAnimationsInterpolate />
                <MarginLeftAnimations />
                <MovingMarginAnimations />
                <RotateOxAnimations />
                <RotateOyAnimations />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { minHeight: SizeRpScreen.height(100), width: SizeRpScreen.width(100) }
})

export { TimingAnimatedComponent };

