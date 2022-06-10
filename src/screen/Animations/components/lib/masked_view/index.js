import { colorArray } from '@css/Color';
import MaskedView from '@react-native-masked-view/masked-view';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MaskedViewAnimations = () => {
    const [state, setState] = useState({
        partOne: 1,
        partTwo: 1,
        partThree: 1,
        partFour: 1
    });
    const timeCountInterVar = useRef(0);
    useEffect(() => {
        onChangeColor();
        return () => {
            clearInterval(timeCountInterVar.current);
        };
    }, []);
    const onChangeColor = () => {
        timeCountInterVar.current = setInterval(() => {
            setState((state) => ({
                ...state,
                partOne: Math.floor(Math.random() * 3),
                partTwo: Math.floor(Math.random() * 3),
                partThree: Math.floor(Math.random() * 3),
                partFour: Math.floor(Math.random() * 3),
            }))
        }, 800);
    
    }
    return (
        <View style={{ height: SizeRpScreen.device_height, width: SizeRpScreen.device_width }}>
            <MaskedView
                style={{ flex: 1, flexDirection: 'row', height: '100%' }}
                maskElement={
                    <View
                        style={{
                            backgroundColor: 'transparent',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 60,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            REACT NATIVE BASE 064
                        </Text>
                    </View>
                }
            >
                <View style={{ flex: state.partOne, height: '100%', backgroundColor: colorArray[Math.floor(Math.random() * colorArray.length)] }} />
                <View style={{ flex: state.partTwo, height: '100%', backgroundColor: colorArray[Math.floor(Math.random() * colorArray.length)] }} />
                <View style={{ flex: state.partThree, height: '100%', backgroundColor: colorArray[Math.floor(Math.random() * colorArray.length)] }} />
                <View style={{ flex: state.partFour, height: '100%', backgroundColor: colorArray[Math.floor(Math.random() * colorArray.length)] }} />
            </MaskedView>
        </View>
    );
}
const styles = StyleSheet.create({

});


