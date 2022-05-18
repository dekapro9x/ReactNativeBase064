import MaskedView from '@react-native-masked-view/masked-view';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MaskedViewAnimations = () => {
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
                <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
            </MaskedView>
        </View>
    );
}
const styles = StyleSheet.create({

});


