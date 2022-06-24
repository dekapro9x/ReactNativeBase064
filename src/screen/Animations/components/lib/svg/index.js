import React from 'react';
import { StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
const Svg = () => {
    return (
            <SvgUri
                width="100%"
                height="100%"
                uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
            />
    );
}

const styles = StyleSheet.create({})

export { Svg };

