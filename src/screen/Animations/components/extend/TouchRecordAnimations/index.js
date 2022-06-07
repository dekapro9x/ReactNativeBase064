import { AppIcon } from '@element/AppIcon';
import React, { Component } from 'react';
import {
    Animated, StyleSheet, TouchableOpacity, View
} from 'react-native';

export class TouchRecordAnimations extends Component {
    constructor(props) {
        super(props);
        this.animated = new Animated.Value(0);
        this.opacity = new Animated.Value(1);
        this.state = {
            isPressed: false
        }
    }

    _startAnimation() {
        Animated.loop(
            Animated.parallel([
                Animated.timing(this.animated, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,

                }),
                Animated.timing(this.opacity, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                })
            ])
        ).start();
    }

    _stopAnimation() {
        Animated.loop(
            Animated.parallel([
                Animated.timing(this.animated),
                Animated.timing(this.opacity)
            ])
        ).stop();
    }

    _onPressRecordSound = () => {
        const { isPressed } = this.state;
        this.setState({ isPressed: !isPressed }
        )
    }

    _micButton() {
        const { isPressed } = this.state;
        if (isPressed) {
            this._startAnimation();
            return (
                <Animated.View style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    backgroundColor: 'red',
                    opacity: this.opacity,
                    alignItems: "center", justifyContent: "center",
                    transform: [
                        {
                            scale: this.animated
                        }
                    ]
                }}>
                    <AppIcon type={"MaterialCommunityIcons"} name={"microphone-outline"} color={"#FFFFFF"} size={60}></AppIcon>
                </Animated.View>
            );
        } else {
            return (
                <View style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    backgroundColor: 'blue',
                    alignItems: 'center',
                    justifyContent: "center"
                }}>
                    <AppIcon type={"MaterialCommunityIcons"} name={"microphone-outline"} color={"#FFFFFF"} size={60}></AppIcon>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._onPressRecordSound}>
                    {this._micButton()}
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});