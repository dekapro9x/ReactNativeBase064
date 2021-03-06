import { ContextContainer } from "@context/AppContext";
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { LongShortAnimations } from "./LongShortAnimations";
import { MarginLeftAnimations } from "./MarginLeftAnimations";
import { MovingMarginAnimations } from "./MovingMarginAnimations";
import { OpacityAnimations } from "./OpacityAnimations";
import { OpacityAnimationsInterpolate } from "./OpacityAnimationsInterpolate";
import { RotateOxAnimations } from "./RotateOxAnimations";
import { RotateOyAnimations } from "./RotateOyAnimations";
import { SizeTextAnimations } from "./SizeTextAnimations";
import { SpinAnimations } from "./SpinAnimations";
// import { BaseAnimations } from "./BaseAnimations";
const TimingAnimatedComponent = () => {

    const { colorApp } = useContext(ContextContainer);
    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: colorApp.backgroundColor, paddingBottom: 120 }]}>
                {/* <BaseAnimations /> */}
                <SpinAnimations />
                <OpacityAnimations />
                <LongShortAnimations />
                <SizeTextAnimations />
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

// Animated.timing() : Ánh xạ với phạm vi thời gian để easing value
// Easing là module cho phép chúng ta sử dụng các method để easing như linear, ease, quad, cubic, sin, elastic, bounce, back, bezier, in, out, inout...