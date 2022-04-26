import { animatedComponent } from '@css/';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export function MarginLeftAnimations() {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        startAnimation();
        return () => { };
    }, []);

    const startAnimation = () => {
        animation.setValue(0);
        Animated.timing(animation, {
            toValue: 1,
            duration: 2000,
            // useNativeDriver: true,
            easing: Easing.linear,
        }).start(startAnimation);
    };

    const opacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 300]
      })

    return (
        <View style={animatedComponent}>
            <Text
                style={{ fontSize: SizeRpScreen.H4, fontWeight: 'bold', color: "black" }}>
                Run... 
            </Text>
            <Animated.View style={{ marginLeft: opacity, width: 60, height: 60, marginTop: 10, backgroundColor: "red", transform: [] }}>
            </Animated.View>
        </View>
    );
}

