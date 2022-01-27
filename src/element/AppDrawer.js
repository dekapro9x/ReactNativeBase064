import { white } from '@css/Color';
import React from 'react';
import { View } from 'react-native';

const Appdrawer = ({ canRenderDrawer }) => {
    if (canRenderDrawer) {
        return (
            <View style={{ flex: 1, backgroundColor: white }}>
                
            </View>
        );
    }
    return null

}

export default Appdrawer;
