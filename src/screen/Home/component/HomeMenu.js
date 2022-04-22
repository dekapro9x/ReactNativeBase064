import { ContextContainer } from '@context/AppContext';
import { green400, white } from '@css/Color';
import { AppIcon } from '@element/AppIcon';
import { AppText } from '@element/AppText';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeMenu(props) {
  const { colorApp } = useContext(ContextContainer);

  const navigateToScreen = (item) => () => {
    const {navigation} = props;
    navigation.navigate(item.id);
  }

  const renderItemMenu = ({ item, index }) => {
    return <TouchableOpacity
      onPress={navigateToScreen(item)}
      style={{
        height: SizeRpScreen.device_width / 3 - 20, width: SizeRpScreen.device_width / 3 - 20,
        backgroundColor: white, margin: 5, borderWidth: SizeRpScreen.device_width * 0.005,
        borderColor: green400, borderRadius: 12, alignItems: "center", justifyContent: "center"
      }}>
      <AppIcon type={item.iconType} name={item.iconName} color={item.iconColor} iconSize={item.iconSizeMenu}>
      </AppIcon>
      <AppText style={{ fontSize: 16 }}>{item.title}</AppText>
    </TouchableOpacity>
  }

  return (
    <FlatList
      data={props.dataMenu}
      numColumns={3}
      nestedScrollEnabled={true}
      keyExtractor={(_item, index) => index.toString()}
      renderItem={renderItemMenu}
      initialNumToRender={5}
      maxToRenderPerBatch={10}
      windowSize={10}
      style={[styles.container, { backgroundColor: colorApp.backgroundColor }]}>
    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    alignSelf: "center"
  },
  banner: {
    height: SizeRpScreen.width(100) * 9 / 16,
    width: SizeRpScreen.width(100),
  }
})

