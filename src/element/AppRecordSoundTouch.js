import { AppIcon } from '@element/AppIcon';
import React, { Component } from 'react';
import {
    Animated, StyleSheet, TouchableOpacity, View
} from 'react-native';
import Voice from '@react-native-voice/voice';
import PropTypes from 'prop-types';
import { AppText } from './AppText';

export class AppRecordSoundTouch extends Component {

    static propTypes = {
        getSoundResource: PropTypes.func.isRequired,
        heightCss:PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);
        this.animated = new Animated.Value(0);
        this.opacity = new Animated.Value(1);
        this.state = {
            isPressed: false,
            pitch: "",
            error: "",
            end: "",
            started: "",
            results: "",
            partialResults: ""
        }
    }

    componentDidMount() {
        Voice.onSpeechError = this.onSpeechError;
        Voice.onSpeechResults = this.onSpeechResults;
        Voice.onSpeechPartialResults = this.onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
    };

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }

    onSpeechStart = (event) => {
        this.setState({ started: "√", isPressed: true });
    };

    onSpeechEnd = (event) => {
        this.setState({ end: "√", started: "", isPressed: false });
    };

    onSpeechError = (event) => {
        const { getSoundResource } = this.props;
        this.cancelRecognizing();
        getSoundResource("ErrorResult", [], event.error);
        this.setState({ error: JSON.stringify(event.error), isPressed: false, start: "", end: "√" });
    };

    //Danh sách kết quả đoạn hội thoại:
    onSpeechResults = (event) => {
        const { getSoundResource } = this.props;
        getSoundResource("PartResults", event.value);
        this.setState({ results: event.value, isPressed: false, });
    };

    //Danh sách kết quả 1 phần đoạn hội thoại:
    onSpeechPartialResults = (event) => {
        const { getSoundResource } = this.props;
        this.onSpeechEnd();
        getSoundResource("FullResults", event.value);
        this.setState({ isPressed: false });
    };

    onSpeechVolumeChanged = (element) => {
        // console.log("Lắng nghe từ:", element.value)
        // this.setState({ pitch: element.value });
    };

    startRecognizing = async () => {
        try {
            await Voice.start('vi-VN');
            this.setState({
                started: "√",
                results: [],
                partialResults: []
            })
        } catch (e) {
            console.error(e);
        }
    };

    stopRecognizing = async () => {
        try {
            await Voice.stop();
        } catch (e) {
            console.error(e);
        }
    };

    cancelRecognizing = async () => {
        try {
            await Voice.cancel();
        } catch (e) {
            console.error(e);
        }
    };

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
        this.setState({ isPressed: !isPressed });
        if (isPressed) {
            this.onSpeechEnd();
            this.stopRecognizing();
        } else {
            this.onSpeechStart();
            this.startRecognizing();
        }
    }

    _micButton() {
        const { isPressed } = this.state;
        const {heightCss} = this.props;
        const height = heightCss|| 200;
        const width = height;
        const borderRadius = height/2;
        if (isPressed) {
            this._startAnimation();
            return (
                <Animated.View style={{
                    opacity: this.opacity,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F00",
                    height: height,
                    width: width,
                    borderRadius: borderRadius,
                    transform: [
                        {
                            scale: this.animated
                        }
                    ]
                }}>
                    <AppIcon type={"MaterialCommunityIcons"} name={"microphone-outline"} color={"#900"} sizeIcon={50}></AppIcon>
                </Animated.View>
            );
        } else {
            return (
                <View style={{
                    alignItems: 'center',
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    height: height,
                    width: width,
                    borderRadius: borderRadius,
                }}>
                    <AppIcon type={"MaterialCommunityIcons"} name={"microphone-outline"} color={"#900"} sizeIcon={50}></AppIcon>
                </View>
            );
        }
    }

    renderState = () => {
        const { isPressed, pitch, error, end, started, results, partialResults } = this.state;
        return (
            <>
                <AppText>IsPressed:{`${isPressed}`}</AppText>
                <AppText>Pitch"{`${pitch}`}</AppText>
                <AppText>Error:{`${error}`}</AppText>
                <AppText>End:{`${end}`}</AppText>
                <AppText>Started:{`${started}`}</AppText>
                <AppText>Results:{`${results}`}</AppText>
                <AppText>PartialResults:{`${partialResults}`}</AppText>
            </>
        )
    }

    render() {
        const { touchStyle } = this.props;
        return (
            <View style={[styles.containerStyle]}>
                {/* {this.renderState()} */}
                <TouchableOpacity
                    style={[styles.touchStyle, { ...touchStyle }]}
                    onPress={this._onPressRecordSound}>
                    {this._micButton()}
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchStyle: {
        height: 200,
        width: 200,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    }
});