import { white } from '@css/Color';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DateAndWeather() {
  return (
    <View style={styles.container}>
      <Text> DateAndWeather </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50, width: SizeRpScreen.width(100),
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
