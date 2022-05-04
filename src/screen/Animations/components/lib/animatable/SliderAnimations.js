import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import {
    StyleSheet
} from 'react-native';
import { View, Text } from 'react-native-animatable';
export const SliderAnimations = () => {
    const [duration, setStateDuration] = useState(0);
    const handleDurationChange = (duration) => {
        setStateDuration(Math.round(duration));
    };
    return (
        <View>
            <Slider
                style={styles.slider}
                value={1000}
                onValueChange={handleDurationChange}
                maximumValue={2000}
            />
            <Text animation="zoomInDown" delay={700} style={styles.instructions}>
                Tap one of the following to animate for {duration} ms
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    slider: {
        height: 30,
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 20,
        backgroundColor: 'transparent',
    },
});


