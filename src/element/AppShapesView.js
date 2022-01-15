import React from 'react';
import { StyleSheet, View } from 'react-native';
// https://codedaily.io/tutorials/The-Shapes-of-React-Native
export function AppShapesView() {
    return (
        <View style={styles.hexagon}>
            <View style={styles.hexagonInner} />
            <View style={styles.hexagonBefore} />
            <View style={styles.hexagonAfter} />
        </View>
    );
}
    
const styles = StyleSheet.create({
    hexagon: {
        width: 100,
        height: 55,
    },
    hexagonInner: { 
        width: 100,
        height: 55,
        backgroundColor: 'red'
    },
    hexagonAfter: {
        position: 'absolute',
        bottom: -25,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderLeftColor: 'transparent',
        borderRightWidth: 50,
        borderRightColor: 'transparent',
        borderTopWidth: 25,
        borderTopColor: 'red'   
    },
    hexagonBefore: {
        position: 'absolute',
        top: -24.9,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderLeftColor: 'transparent',
        borderRightWidth: 50,
        borderRightColor: 'transparent',
        borderBottomWidth: 25,
        borderBottomColor: 'red'
    }
});