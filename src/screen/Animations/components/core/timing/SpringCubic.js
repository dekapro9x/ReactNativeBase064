import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View, ScrollView } from 'react-native';

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
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.cubic,
    }).start(startAnimation);
  };
  useEffect(() => {
    startAnimation();
    return () => { };
  }, []);
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{ minHeight: SizeRpScreen.height(100), width: SizeRpScreen.width(100) }}>
        <Text
          style={{ textAlign: 'center', fontSize: SizeRpScreen.H4, fontWeight: 'bold', color: "black" }}>
          Spring Cubic
        </Text>
        <Animated.Image
          style={{ width: 150, height: 150, marginTop: 50, transform: [{ rotate: spin }] }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSQWNNMWrkRWdoX0gH36XXMFTFgZfa8DMcA9AnalnL_Q&usqp=CAU&ec=45707743',
          }}
        />
      </View>
    </ScrollView>
  );
}
