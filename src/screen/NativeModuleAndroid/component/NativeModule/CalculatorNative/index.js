import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useState } from 'react';
import { View, StyleSheet, Text, NativeModules, Button } from 'react-native';
const NativeModuleCalendar = () => {

    const { CalendarModule, CalculatorModule, CalculatorUniqueID } = NativeModules;
    const [valueCalendarModule, useStateValueCalendarModule] = useState("");
    const [valueCalculatorModule, useStateValueCalculatorModule] = useState("");
    const [valueCalculatorUniqueID, useStateValueCalculatorUniqueID] = useState("");

    const onPress = () => {
        CalendarModule.createCalendarEvent('TestName', 'TestLocation');
        const value1 = CalendarModule.getString();
        const value2 = CalculatorModule.getString();
        const value3 = CalculatorUniqueID.getString();
        useStateValueCalendarModule(value1);
        useStateValueCalculatorModule(value2);
        useStateValueCalculatorUniqueID(value3);
    };

    return (
        <View>
            <View style={{ height: 100, width: SizeRpScreen.device_width, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold" }}>Module 1:{valueCalendarModule}</Text>
                <Text style={{ fontWeight: "bold" }}>Module 2:{valueCalculatorModule}</Text>
                <Text style={{ fontWeight: "bold" }}>Module 3:{valueCalculatorUniqueID}</Text>
                <Text></Text>
            </View>
            <Button
                title="Click Call Native Module"
                color="#841584"
                onPress={onPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default NativeModuleCalendar;