import React, { useState } from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import AnimatedLoader from "@libJS/react-native-animated-loader";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
SizeRpScreen
export const LottieAnimations = () => {
    const [visible, setStateVisible] = useState(true);
    const hideAndBackAnimations = () => {
        setStateVisible(false)
    }
    return (
        <View style={{ flex: 1 }}>
          
               
        </View>

    );
}
const styles = StyleSheet.create({
    animatedLoader: {
        width: 200,
        height: 200
    }
});


