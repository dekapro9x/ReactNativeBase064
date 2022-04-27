import { animatedComponent } from '@css/';
import { blueGrey900 } from '@css/Color';
import { AppText } from '@element/AppText';
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useRef } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const LongShortAnimations = () => {
    const longWidth = useRef(new Animated.Value(0)).current;

    const showView = () => {
        Animated.timing(longWidth, {
            toValue: 250,
            duration: 2000
        }).start();
    };

    const hideView = () => {
        Animated.timing(longWidth, {
            toValue: 0,
            duration: 2000
        }).start();
    };

    return (
        <View style={animatedComponent}>
            <Text
                style={{ textAlign: 'center', fontSize: SizeRpScreen.H4, fontWeight: 'bold', color: "black" }}>
                Long - Short 
            </Text>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        width: longWidth
                    }
                ]}
            >
            </Animated.View>
            <View style={{ width: SizeRpScreen.width(80), height: 40, flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity
                    onPress={showView}
                    style={{ height: 40, width: SizeRpScreen.width(30), backgroundColor: blueGrey900, justifyContent: "center", alignItems: "center" }}>
                    <AppText style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Long</AppText>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={hideView}
                    style={{ height: 40, width: SizeRpScreen.width(30), backgroundColor: blueGrey900, justifyContent: "center", alignItems: "center" }}>
                    <AppText style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Short</AppText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    fadingContainer: {
        height: 20,
        backgroundColor: "red",
        borderRadius: 20,
        marginVertical: 20
    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        justifyContent: "space-evenly",
        marginVertical: 16,
    }
});
