import React, { Component, PropsWithChildren } from 'react';
import {
  Animated,
  StyleSheet
} from 'react-native';

import PropTypes from "prop-types";
import { RectButton, Swipeable } from 'react-native-gesture-handler';


export default class AppItemSwipeableRow extends Component<PropsWithChildren<unknown>> {

  static propTypes = {
    renderLeftComponent: PropTypes.func.isRequired,
    renderRightComponent: PropTypes.func.isRequired,
    containerStyle: PropTypes.object
  };

  private renderLeftActions = (_progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
    const { renderLeftComponent } = this.props;
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
      extrapolate: 'clamp',
    });

    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.View
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          {renderLeftComponent()}
        </Animated.View>
      </RectButton>
    );
  };

  private swipeableRow?: Swipeable;

  private updateRef = (ref: Swipeable) => {
    this.swipeableRow = ref;
  };

  private close = () => {
    this.swipeableRow?.close();
  };

  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={1}
        enableTrackpadTwoFingerGesture
        leftThreshold={30}
        rightThreshold={30}
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.props.renderRightComponent}
        onSwipeableOpen={(direction) => {
          console.log(`Opening swipeable from the ${direction}`);
        }}
        onSwipeableClose={(direction) => {
          console.log(`Closing swipeable to the ${direction}`);
        }}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});