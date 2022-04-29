import { animatedComponent } from '@css/';
import React, { useEffect } from 'react';
import { View } from 'react-native';

export function BaseAnimations() {

  useEffect(() => {
    return () => { };
  }, []);


  return (
    <View style={animatedComponent}>

    </View>
  );
}
