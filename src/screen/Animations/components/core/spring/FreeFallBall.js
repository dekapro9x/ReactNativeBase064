import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';

const FreeFallBall = () => {
    const widthStartBall = useRef(new Animated.Value(SizeRpScreen.width(50))).current;
    const heightStartBall = useRef(new Animated.Value(SizeRpScreen.width(50))).current;
    const heightFallStart = useRef(new Animated.Value(0)).current;
    const [isEndFall, setStateIsEndFall] = useState(false);

    useEffect(() => {
        if (isEndFall) {
            startFall();
        } else {
            endFall();
        }
    }, [isEndFall]);

    const animationsStartRun = () => {
        setStateIsEndFall(!isEndFall);
    }

    const startFall = () => {
        widthStartBall.setValue(SizeRpScreen.width(20));
        heightStartBall.setValue(SizeRpScreen.width(20));
        Animated.decay(heightFallStart, {
            toValue: SizeRpScreen.height(80),
            duration: 1000,
            velocity: 0.55, //Gia tốc.
            deceleration: 0.998, //Giảm tốc
            useNativeDriver: false
        }).start();
        Animated.spring(
            widthStartBall,
            {
                toValue: SizeRpScreen.width(50),
                friction: 1,
                tension: 1,
                delay: 2000
            }
        ).start();
        Animated.spring(
            heightStartBall,
            {
                toValue: SizeRpScreen.width(50),
                friction: 1,
                tension: 1,
                delay: 2000
            }
        ).start();
    }

    const endFall = () => {
        Animated.timing(heightFallStart, {
            toValue: 0,
            duration: 1000,
        }).start();
    }

    return (
        <View style={styles.container}>
            <Animated.View
                style={{ height: 200, width: SizeRpScreen.device_width, marginTop: heightFallStart, alignItems: "center" }}
            >
                <Animated.Image
                    style={{ width: widthStartBall, height: heightStartBall, resizeMode: 'stretch' }}
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/2048px-Soccerball.svg.png" }}
                />
            </Animated.View>
            <TouchableOpacity
                onPress={animationsStartRun}
                style={styles.touchStart}
            >
                <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>{isEndFall ? "STOP" : "START"}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: SizeRpScreen.device_height - 100,
        width: SizeRpScreen.device_width,
        justifyContent: "space-between",
        alignItems: "center"
    },
    touchStart: {
        height: 60,
        width: 200,
        backgroundColor: "green",
        justifyContent: "center",
        borderRadius: 12
    }
})

export default FreeFallBall;
