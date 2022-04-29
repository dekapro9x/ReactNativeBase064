import { animatedComponent } from '@css/';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export function MovingMarginAnimations() {
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

    const runLeft = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [20, 300, 20]
    })

    return (
        <View style={[animatedComponent, { alignItems: null }]}>
            <Text
                style={{ alignSelf: "center", fontSize: SizeRpScreen.H4, fontWeight: 'bold', color: "black" }}>
                Moving Margin Interpolate
            </Text>
            <Animated.Image
             source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/2048px-Soccerball.svg.png',
              }}
             style={{  marginLeft: runLeft, width: 60, height: 60, marginTop: 10,  transform: [] }}>
            </Animated.Image>
        </View>
    );
}

