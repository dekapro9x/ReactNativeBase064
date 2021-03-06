//AssistiveTouch
import React, { useRef, useState } from 'react';
import { Animated, PanResponder, StyleSheet, View } from "react-native";
const TouchHandleAnimations = () => {
    const [color, setStateColor] = useState("rgba(255,255,255,0.7)");
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => { return true },
            onStartShouldSetPanResponderCapture: (evt, gestureState) => {return true},
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {return true},
            onPanResponderTerminationRequest: (evt, gestureState) => {
                return true
            },
            onPanResponderRelease: (evt, gestureState) => {
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                return true;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return true
            },
            onPanResponderGrant: (evt, gestureState) => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ]
            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })).current;
    return (
        <Animated.View
            style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }]
            }}
            {...panResponder.panHandlers}
        >
            <View style={styles.box} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
    },
    box: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: "blue",
        position: "absolute"
    }
})

export { TouchHandleAnimations };

