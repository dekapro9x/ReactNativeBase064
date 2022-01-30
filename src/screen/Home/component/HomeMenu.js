import { ContextContainer } from '@context/AppContext';
import { white } from '@css/Color';
import { keyNavigation } from '@navigation/KeyNavigations';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import { push } from '@services/NavigationService';
import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeMenu({ navigation }) {
  const { colorApp } = useContext(ContextContainer);
  const navigateToScreen = () => {
    push(keyNavigation.BASIC_TS);
  };
  return (
    <View style={[styles.container, { backgroundColor: colorApp.backgroundColor }]}>
      <TouchableOpacity
        styles={{
          height: 45,
          width: 250,
          boderWidth: 1,
          boderRadius: 10,
          backgroundColor: "green"
        }}
        onPress={navigateToScreen}
      >
     
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    height: SizeRpScreen.width(100) * 9 / 16,
    width: SizeRpScreen.width(100),
  }
})

