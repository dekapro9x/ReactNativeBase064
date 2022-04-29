import { animatedComponent } from '@css/';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export function SpinAnimations() {
  const animation = useRef(new Animated.Value(0)).current;
  const spin = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    startAnimation();
    return () => { };
  }, []);

  const startAnimation = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.cubic,
    }).start(startAnimation);
  };

  return (
    <View style={animatedComponent}>
      <Text
        style={{ fontSize: SizeRpScreen.H4, fontWeight: 'bold', color: "black" }}>
          Spin
      </Text>
      <Animated.Image
        style={{ width: 60, height: 60, marginTop: 25, transform: [{ rotate: spin }] }}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/2048px-Soccerball.svg.png',
        }}
      />
    </View>
  );
}
