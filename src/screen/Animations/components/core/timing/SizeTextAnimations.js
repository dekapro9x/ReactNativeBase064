import { animatedComponent } from '@css/';
import { blueGrey900 } from '@css/Color';
import { AppText } from '@element/AppText';
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const SizeTextAnimations = () => {
    const size = useRef(new Animated.Value(0)).current;
    const [isBigText, setStateIsBigText] = useState(false);

    const bigText = () => {
        setStateIsBigText(false);
        Animated.timing(size, {
            toValue: 50,
            duration: 2000
        }).start();
    };

    const smallText = () => {
        setStateIsBigText(true);
        Animated.timing(size, {
            toValue: 15,
            duration: 2000
        }).start();
    };

    return (
        <View style={animatedComponent}>
            <Text
                style={{ textAlign: 'center', fontSize: SizeRpScreen.H4, fontWeight: 'bold', color: "black" }}>
                Small - Big Text
            </Text>
                <Animated.Text
                    style={[
                        {
                            fontSize: size,
                            color: "white",
                            backgroundColor: "red"
                        }
                    ]}
                >
                    {isBigText ? "SMALL" : "BIG"}
                </Animated.Text>
            <View style={{ width: SizeRpScreen.width(80), height: 40, flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity
                    onPress={smallText}
                    style={{ height: 40, width: SizeRpScreen.width(30), backgroundColor: blueGrey900, justifyContent: "center", alignItems: "center" }}>
                    <AppText style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Small</AppText>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={bigText}
                    style={{ height: 40, width: SizeRpScreen.width(30), backgroundColor: blueGrey900, justifyContent: "center", alignItems: "center" }}>
                    <AppText style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Big</AppText>
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
