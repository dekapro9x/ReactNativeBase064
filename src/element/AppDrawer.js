import React from 'react';
import { View } from 'react-native';

const Appdrawer = ({ canRenderDrawer }) => {
    if (canRenderDrawer) {
        return (
            <View style={{ flex: 1, backgroundColor: "red" }}></View>
        );
    }
    return null

}

export default Appdrawer;
