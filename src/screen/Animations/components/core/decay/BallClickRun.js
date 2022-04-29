import { animatedComponent } from '@css/';
import { blueGrey900 } from '@css/Color';
import { AppText } from '@element/AppText';
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useRef } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View ,ImageBackground} from "react-native";

export const BallClickRun = () => {
    const marginLeft = useRef(new Animated.Value(SizeRpScreen.width(5))).current;

    const runBall = () => {
        Animated.decay(marginLeft, {
            toValue: SizeRpScreen.width(82),
            duration: 2000,
            velocity: 0.66, //Gia tốc.
            deceleration: 0.998, //Giảm tốc,
            useNativeDriver: false
        }).start();
    };

    const backBall = () => {
        Animated.timing(marginLeft, {
            toValue: SizeRpScreen.width(1),
            duration: 500,
            velocity: 1,
            deceleration: 0.998,
            useNativeDriver: false
        }).start();
    };

    return (
        <View style={[animatedComponent, { alignItems: null ,minHeight: SizeRpScreen.height(40)}]}>
            <Text
                style={{ textAlign: 'center', fontSize: SizeRpScreen.H4, fontWeight: 'bold', color: "black" }}>
                Ball Click Run
            </Text>
           {/* Vùng bóng */}
           <ImageBackground
                resizeMode={"stretch"}
                source={{ uri: "https://snipstock.com/assets/cdn/png/0a6700039404b3ab06e32db310abbb56.png" }}
                style={{ flex: 1, backgroundColor: 'black', justifyContent: "flex-end" }}>
                <Animated.Image
                    source={{
                        uri:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/2048px-Soccerball.svg.png',
                    }}
                    style={[
                        styles.fadingContainer,
                        {
                            marginLeft: marginLeft,
                        }
                    ]}
                >
                </Animated.Image>
            </ImageBackground>
            <View style={{ width: SizeRpScreen.width(80), height: 40, flexDirection: "row", justifyContent: "space-between", alignSelf: "center" }}>
                <TouchableOpacity
                    onPress={runBall}
                    style={{ height: 40, width: SizeRpScreen.width(30), backgroundColor: blueGrey900, justifyContent: "center", alignItems: "center" }}>
                    <AppText style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Kick</AppText>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={backBall}
                    style={{ height: 40, width: SizeRpScreen.width(30), backgroundColor: blueGrey900, justifyContent: "center", alignItems: "center" }}>
                    <AppText style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Put</AppText>
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
        marginVertical: 20,
    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        justifyContent: "space-evenly",
        marginVertical: 16,
    }
});
