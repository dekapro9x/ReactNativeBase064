import { FontAppType } from '@const/TypeFontFamily';
import { ContextContainer } from '@context/AppContext';
import { white } from '@css/Color';
import { AppIcon } from '@element/AppIcon';
import { AppText } from '@element/AppText';
import { keyNavigation } from '@navigation/KeyNavigations';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import { navigate, push } from '@services/NavigationService';
import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function HomeMenu({ navigation }) {
  const { colorApp } = useContext(ContextContainer);
  const navigateToScreen = () => {
    // navigation.navigate(keyNavigation.BASIC_TS);
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
        <Text>HOME SCREEN</Text>
        <AppIcon type="Entypo" name="500px" iconSize={22} color="red" />
        <AppText fontFamily={FontAppType.MotoyaLMaru}>
          Test App Text Font
        </AppText>
        <AppText fontFamily={FontAppType.Champagne}>
          Test App Text Font
        </AppText>
        <AppText fontFamily={FontAppType.Happy}>Test App Text Font</AppText>
        <AppText fontFamily={FontAppType.HappyShadows}>
          Test App Text Font
        </AppText>
        <AppText fontFamily={FontAppType.LetterMagic}>
          Test App Text Font
        </AppText>
        <AppText fontFamily={FontAppType.Sun}>Test App Text Font</AppText>
        <AppText fontFamily={FontAppType.Blacklight}>
          Test App Text Font
        </AppText>
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

