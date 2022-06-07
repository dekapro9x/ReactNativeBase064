import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
const AppLinearGradient = (props) => {
    const { children } = props;
    const { style } = props;
    return (
        <View style={{ minHeight: SizeRpScreen.device_height, width: SizeRpScreen.device_width }}>
            <LinearGradient
                colors={["#B60F46", '#D592FF']}
                end={{ x: 1, y: 1 }}
                start={{ x: 0, y: 0 }}
                style={[{
                    flex: 1,
                },{...style}]}
            >
                {children}
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({})

export default AppLinearGradient;
