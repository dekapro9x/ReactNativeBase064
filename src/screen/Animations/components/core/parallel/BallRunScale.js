import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text, Easing } from 'react-native';

const BallRunScale = () => {
    const leftStartBallRun = useRef(new Animated.Value(0)).current; //Vị trí ban đầu bên trái 0.
    const animation = useRef(new Animated.Value(0)).current;

    const runRotateOx = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', '180deg', '0deg']
    })

    const startRun = () => {
        animation.setValue(0);
        Animated.parallel([
            Animated.timing(leftStartBallRun, {
                toValue: SizeRpScreen.device_width - 50,
                duration: 2000,
            }),
            Animated.timing(animation, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false,
                easing: Easing.linear,
            })
        ]).start();
    }

    const comeBackBallRun = () => {
        Animated.timing(leftStartBallRun, {
            toValue: 0,
            duration: 2000,
        }).start();
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 12 }}>
                <Animated.View
                    style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'blue',
                        marginLeft: leftStartBallRun,
                        transform: [{ rotateX: runRotateOx }]
                    }}>

                </Animated.View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity
                    onPress={startRun}
                    style={styles.touch}>
                    <Text style={styles.textTouch}>Go</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={comeBackBallRun}
                    style={styles.touch}>
                    <Text style={styles.textTouch}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: SizeRpScreen.height(40),
        width: SizeRpScreen.width(100),
        justifyContent: 'space-between'
    },
    touch: {
        height: 50, width: 100, backgroundColor: 'green', justifyContent: 'center'
    },
    textTouch: {
        fontSize: 25, fontWeight: "bold", color: "white", textAlign: "center"
    }
})

export default BallRunScale;
