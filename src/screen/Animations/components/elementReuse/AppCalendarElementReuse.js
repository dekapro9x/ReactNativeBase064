import AppCalendar from '@element/AppCalendar';
import { AppText } from '@element/AppText';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const AppCalendarElementReuse = () => {

    const [date, setStateDate] = useState("Date");

    const onChangeData = (value) => {
        setStateDate(value);
    }

    return (
        <View>
            <AppText style={{ textAlign: "center", fontSize: 14, color: "blue", fontWeight: "bold" }}>Date: {date}</AppText>
            <AppCalendar style={styles.calendar} onChangeData={onChangeData}></AppCalendar>
        </View>
    );
}

const styles = StyleSheet.create({
    calendar: {
        height: 40,
        width: SizeRpScreen.width(85),
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    }
})

export { AppCalendarElementReuse };
