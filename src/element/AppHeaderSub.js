import { FontAppType } from '@const/TypeFontFamily';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from './AppText';
import PropTypes from 'prop-types';


const AppHeaderSub = (props) => {
    const {subName} = props;
    return (
        <View style={{
            height: 50, 
            width: SizeRpScreen.device_width,
            backgroundColor: '#2E9298',
            justifyContent: "center",
            marginVertical: 1,
            shadowColor: '#000000',
            shadowOffset: {
                width: 200,
                height: 30
            },
            shadowRadius: 25,
            shadowOpacity: 1.0
        }}>
            <AppText style={{ fontFamily: FontAppType.LetterMagic, fontSize: 18, textAlign: 'center' }}>
                {subName}
            </AppText>
        </View>
    );
}

AppHeaderSub.propTypes = {
    subName: PropTypes.string
  };


const styles = StyleSheet.create({})

export { AppHeaderSub };
