import { AppIcon } from '@element/AppIcon';
import React, { Component } from 'react';
import {
    Animated, StyleSheet, TouchableOpacity, View
} from 'react-native';

export class TouchRecordAnimations extends Component {
    state = {
        isPressed: false,
        animated: new Animated.Value(0),
        opacityA: new Animated.Value(1),
    }
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }
    _runAnimation() {
        const { animated, opacityA } = this.state;

        Animated.loop(
            Animated.parallel([
                Animated.timing(animated, {
                    toValue: 1,
                    duration: 800,

                }),
                Animated.timing(opacityA, {
                    toValue: 0,
                    duration: 800,

                })
            ])
        ).start();
    }
    _stopAnimation() {
        const { animated, opacityA } = this.state;
        Animated.loop(
            Animated.parallel([
                Animated.timing(animated),
                Animated.timing(opacityA)
            ])
        ).stop();
    }
    _onPress() {
        this.setState(
            state => ({ isPressed: !state.isPressed }),
        )
    }

    _micButton() {
        const { isPressed, animated, opacityA, } = this.state;
        if (isPressed) {
            this._runAnimation();
            return (
                <Animated.View style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    backgroundColor: 'red',
                    opacity: opacityA,
                    alignItems: "center", justifyContent: "center",
                    transform: [
                        {
                            scale: animated
                        }
                    ]
                }}>
                    <AppIcon type={"MaterialCommunityIcons"} name={"microphone-outline"} color={"#FFFFFF"} size={55}></AppIcon>
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
                    <AppIcon type={"MaterialCommunityIcons"} name={"microphone-outline"} color={"#FFFFFF"} size={55}></AppIcon>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._onPress}>
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