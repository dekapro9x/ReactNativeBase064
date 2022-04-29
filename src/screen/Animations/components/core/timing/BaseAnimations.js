import { animatedComponent } from '@css/';
import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class BaseAnimations extends Component {
    constructor() {
        super()
        this.animatedValue = new Animated.Value(0);
        this.animatedValue1 = new Animated.Value(0)
        this.animatedValue2 = new Animated.Value(0)
        this.animatedValue3 = new Animated.Value(0)
    }
    componentDidMount() {
        this.animate()
        this.animateParallel()
    }

    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    animateParallel() {
        this.animatedValue1.setValue(0)
        this.animatedValue2.setValue(0)
        this.animatedValue3.setValue(0)

        Animated.parallel([
            this.createAnimation(this.animatedValue1, 2000, Easing.ease),
            this.createAnimation(this.animatedValue2, 1000, Easing.ease, 1000),
            this.createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)
        ]).start()
    }

    createAnimation = (value, duration, easing, delay = 0) => {
        return Animated.timing(
            value,
            {
                toValue: 1,
                duration,
                easing,
                delay
            }
        )
    }
    render() {
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300]
        })
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        })
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 0]
        })
        const textSize = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [18, 32, 18]
        })
        const rotateX = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        })
        const scaleText = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 2]
        })
        const spinText = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg']
        })
        const introButton = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 400]
        })
        return (
            <View style={animatedComponent}>
                <Animated.View
                    style={{
                        marginLeft,
                        height: 30,
                        width: 40,
                        backgroundColor: 'red'
                    }} />
                <Animated.View
                    style={{
                        opacity,
                        marginTop: 10,
                        height: 30,
                        width: 40,
                        backgroundColor: 'blue'
                    }} />
                <Animated.View
                    style={{
                        marginLeft: movingMargin,
                        marginTop: 10,
                        height: 30,
                        width: 40,
                        backgroundColor: 'orange'
                    }} />
                <Animated.Text
                    style={{
                        fontSize: textSize,
                        marginTop: 10,
                        color: 'green'
                    }} >
                    Animated Text!
                </Animated.Text>
                <Animated.View
                    style={{
                        transform: [{ rotateX }],
                        marginTop: 50,
                        height: 30,
                        width: 40,
                        backgroundColor: 'black'
                    }}>
                    <Text style={{ color: 'white' }}>Hello from TransformX</Text>
                </Animated.View>

                <Animated.View
                    style={{ transform: [{ scale: scaleText }] }}>
                    <Text>Welcome</Text>
                </Animated.View>
                <Animated.View
                    style={{ marginTop: 20, transform: [{ rotate: spinText }] }}>
                    <Text
                        style={{ fontSize: 20 }}>
                        to the App!
                    </Text>
                </Animated.View>
                <Animated.View
                    style={{ top: introButton, position: 'absolute' }}>
                    <TouchableOpacity
                        onPress={this.animate.bind(this)}
                        style={styles.button}>
                        <Text
                            style={{ color: 'white', fontSize: 20 }}>
                            Click Here To Start
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 150
    }
})

export { BaseAnimations };