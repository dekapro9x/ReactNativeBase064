import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export default function SpringCubic() {
  const animation = useRef(new Animated.Value(0));
  const spin = animation.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const startAnimation = () => {
    animation.current.setValue(0);
    Animated.timing(animation.current, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.cubic,
    }).start(startAnimation);
  };
  useEffect(() => {
    startAnimation();
    return () => {};
  }, []);
  return (
    <View>
      <Text
        style={{textAlign: 'center', fontSize: SizeRpScreen.H4, fontWeight: 'bold'}}>
        Spring Cubic
      </Text>
      <Animated.Image
        style={{width: 150, height: 150, transform: [{rotate: spin}]}}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSQWNNMWrkRWdoX0gH36XXMFTFgZfa8DMcA9AnalnL_Q&usqp=CAU&ec=45707743',
        }}
      />
    </View>
  );
}
