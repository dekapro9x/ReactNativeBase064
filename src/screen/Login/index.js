import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import { keyNavigation } from '../../navigation/KeyNavigations';

export default function Login({navigation, router}) {
  const navigateHome = () => {
    navigation.navigate(keyNavigation.HOME);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        styles={{
          height: 45,
          width: 250,
          boderWidth: 1,
          boderRadius: 10,
          backgroundColor: 'green',
        }}
        onPress={navigateHome}>
        <Text>LOGIN SCREEN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'blue'
  },
  bnt_mid: {},
});
