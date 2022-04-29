import { animatedComponent } from '@css/';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export function RotateOxAnimations() {
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
            useNativeDriver: false,
            easing: Easing.linear,
        }).start(startAnimation);
    };

    const runRotateOx = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', '180deg', '0deg']
    })

    return (
        <View style={[animatedComponent, { alignItems: null }]}>
            <Text
                style={{ alignSelf: "center", fontSize: SizeRpScreen.H4, fontWeight: 'bold', color: "black" }}>
                Rotate Ox Interpolate
            </Text>
            <Animated.Image 
             source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/2048px-Soccerball.svg.png',
              }}
            style={{
                alignSelf:"center",
                width: 60, height: 60,
                marginTop: 10, 
                transform: [{ rotateX: runRotateOx }]
            }}>
            </Animated.Image>
        </View>
    );
}

