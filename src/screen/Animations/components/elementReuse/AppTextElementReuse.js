import { FontAppType } from '@const/TypeFontFamily';
import { AppText } from '@element/AppText';
import React from 'react';
import { StyleSheet, Alert } from 'react-native';

const AppTextElementReuse = () => {

    onPress = ()=>{
        Alert.alert("","App text element reuse")
    }

    return (
        <AppText style={styles.appText}>App Text Element Reuse</AppText>
    );
}

const styles = StyleSheet.create({
    appText: {
        fontSize: 35, 
        fontFamily: FontAppType.Happy,
        textAlign: 'center'
    }
})

export { AppTextElementReuse };
