import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { Component } from 'react';
import { PanResponder, Platform, StatusBar, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class MoveableCircle extends Component {

  constructor(props) {
    super(props);
    this._circleStyles = {};
    this._previousLeft = SizeRpScreen.width(50) - 80;
    this._previousTop = SizeRpScreen.height(50) - 120;
    this._maxTop = SizeRpScreen.device_height;
    this._maxLeft = SizeRpScreen.device_width;
    this.circle = null || { setNativeProps: () => { } };
    this.state = {
      color: "rgb(255,102,102)",
      touch: false
    };
  }

  componentDidMount() {
    this._updatePosition();
  }

  _updatePosition() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  }

  _endMove(evt, gestureState) {
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
    this.setState({
      color: "rgb(255,102,102)",
      touch: false
    });
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onPanResponderGrant: (evt, gestureState) => {
        this.setState({
          color: "red",
          touch: true
        })
      },
      onPanResponderMove: (evt, gestureState) => {
        this._circleStyles.style.left = this._previousLeft + gestureState.dx;
        this._circleStyles.style.top = this._previousTop + gestureState.dy;
        if (this._circleStyles.style.left < 0) {
          this._circleStyles.style.left = 0;
        };
        if (this._circleStyles.style.top < 5) {
          this._circleStyles.style.top = 5;
        };
        if (this._circleStyles.style.left > this._maxLeft) {
          this._circleStyles.style.left = this._maxLeft;
        };
        if (this._circleStyles.style.top > this._maxTop) {
          this._circleStyles.style.top = this._maxTop;
        };
        this._updatePosition();
      },
      onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
      onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState),
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
    });
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
      },
    };
  }

  render() {
    const { touch } = this.state;
    return (
      <View ref={(circle) => { this.circle = circle }}
        style={styles.MoveableCircle}
        {...this._panResponder.panHandlers}>
        <Icon ref="baseball" name={touch ? "circle" : "circle-thin"} color={this.state.color} size={180}></Icon>
      </View>
    )
  }
}

export default class extends Component {
  componentWillMount() {
    if (Platform.OS === "ios") {
      StatusBar.setBarStyle(1);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circleContainer}>
          <MoveableCircle></MoveableCircle>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: SizeRpScreen.device_height,
    width: SizeRpScreen.device_width
  },
  bg: {
    width: SizeRpScreen.device_width,
    resizeMode: "stretch",
    position: "absolute"
  },
  circleContainer: {
    height: SizeRpScreen.device_height,
    width: SizeRpScreen.device_width,
  },
  MoveableCircle: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: 0
  },
});