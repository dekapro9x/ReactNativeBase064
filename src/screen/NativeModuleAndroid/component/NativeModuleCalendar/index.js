import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NativeModules, Button } from 'react-native';
const NativeModuleCalendar = () => {
  const { CalendarModule } = NativeModules;
  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
    const getValueNative = CalendarModule.getString();
    console.log("getValueNative", getValueNative);
  };
  return (
    <View>
      <Text>NativeModuleCalendar</Text>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({})

export default NativeModuleCalendar;
