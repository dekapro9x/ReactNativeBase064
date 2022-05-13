import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NativeModules, Button } from 'react-native';
const NativeModuleCalendar = () => {
  const { CalendarModule, CalculatorModule } = NativeModules;
  const [valueCalendarModule, useStateValueCalendarModule] = useState("");
  const [valueCalculatorModule, useStateValueCalculatorModule] = useState("");

  const onPress = () => {
    CalendarModule.createCalendarEvent('TestName', 'TestLocation');
    const value1 = CalendarModule.getString();
    const value2 = CalculatorModule.getString();
    if (value1 && value2) {
      useStateValueCalendarModule(value1);
      useStateValueCalculatorModule(value2);
    }
  };

  return (
    <View>
      <View style={{ height: 100, width: SizeRpScreen.device_width, alignItems: "center", justifyContent: "center" }}>
        <Text>Value return Native Module 1:{valueCalendarModule}</Text>
        <Text>Value return Native Module 2:{valueCalculatorModule}</Text>
        <Text></Text>
      </View>
      <Text>Kiểm tra gọi đến Native Module</Text>
      <Button
        title="Click call Native Module"
        color="#841584"
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({})

export default NativeModuleCalendar;
