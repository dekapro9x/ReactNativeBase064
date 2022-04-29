import { animatedComponent } from '@css/';
import { blueGrey900 } from '@css/Color';
import { AppText } from '@element/AppText';
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useRef } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";

export const BallClickFly = () => {
    const spaceBottom = useRef(new Animated.Value(0)).current;

    const runBall = () => {
        Animated.decay(spaceBottom, {
            toValue: 50,
            duration: 1000,
            velocity: 0.35, //Gia tốc.
            deceleration: 0.998, //Giảm tốc
            useNativeDriver: false
        }).start();
    };

    const backBall = () => {
        Animated.timing(spaceBottom, {
            toValue: SizeRpScreen.height(1),
            duration: 500,
            velocity: 1,
            deceleration: 0.998,
            useNativeDriver: false
        }).start();
    };

    return (
        <View style={[animatedComponent, { alignItems: null, justifyContent: null, minHeight: SizeRpScreen.height(40) }]}>
            <Text
                style={{ textAlign: 'center', fontSize: SizeRpScreen.H4, fontWeight: 'bold', color: "black" }}>
                Ball Click Fly
            </Text>
            {/* Vùng bóng */}
            <ImageBackground
                resizeMode={"stretch"}
                source={{ uri: "https://snipstock.com/assets/cdn/png/0a6700039404b3ab06e32db310abbb56.png" }}
                style={{ flex: 1, backgroundColor: 'black', justifyContent: "flex-end", alignItems: "center" }}>
                <Animated.Image
                    source={{
                        uri:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/2048px-Soccerball.svg.png',
                    }}
                    style={[
                        styles.fadingContainer,
                        {
                            marginBottom: spaceBottom,
                        }
                    ]}
                >
                </Animated.Image>
            </ImageBackground>
            <View style={{ width: SizeRpScreen.width(80), height: 40, flexDirection: "row", justifyContent: "space-between", alignSelf: "center" }}>
                <TouchableOpacity
                    onPress={runBall}
                    style={{ height: 40, width: SizeRpScreen.width(30), backgroundColor: blueGrey900, justifyContent: "center", alignItems: "center" }}>
                    <AppText style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Fly</AppText>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={backBall}
                    style={{ height: 40, width: SizeRpScreen.width(30), backgroundColor: blueGrey900, justifyContent: "center", alignItems: "center" }}>
                    <AppText style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>PUT</AppText>
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
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        justifyContent: "space-evenly",
        marginVertical: 16,
    }
});
