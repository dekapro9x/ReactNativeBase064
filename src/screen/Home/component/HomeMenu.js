import { versionsBuildsAPK } from '@const/Setting';
import { ContextContainer } from '@context/AppContext';
import { green400, white } from '@css/Color';
import { AppIcon } from '@element/AppIcon';
import { AppImage } from '@element/AppImage';
import { AppText } from '@element/AppText';
import { writeLogSystem } from '@logEventSystem/';
import { keyLogSystem } from '@logEventSystem/keyLogSystem';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeMenu(props) {
  const { colorApp } = useContext(ContextContainer);
  const [menuHome, setStateMenuHome] = useState([]);
  const numberColum = useRef(3).current;

  useEffect(() => {
    const { dataMenu } = props;
    const listMenu = dataMenu.filter((item) => item.endpointVersion == versionsBuildsAPK);
    setStateMenuHome(listMenu);
  }, [props.dataMenu]);

  const navigateToScreen = (item) => () => {
    const { navigation } = props;
    navigation.navigate(item.id, { menuClick: item });
    writeLogSystem(keyLogSystem.testClick, `${item.id}`);
  }

  const renderItemMenu = (item, index) => {
    return <TouchableOpacity
      key={`${index}`}
      onPress={navigateToScreen(item)}
      style={{
        height: SizeRpScreen.device_width / numberColum - 20, width: SizeRpScreen.device_width / numberColum - 20,
        backgroundColor: white, margin: 5, borderWidth: SizeRpScreen.device_width * 0.005,
        borderColor: green400, borderRadius: 12, alignItems: "center", justifyContent: "center"
      }}>
      {item?.iconImg ?
        <AppImage
          resizeMode={"cover"}
          source={{ uri: item.iconImg }}
          style={{ height: 30, width: 30 }}></AppImage> :
        <AppIcon type={item.iconType} name={item.iconName} color={item.iconColor} iconSize={item.iconSizeMenu}>
        </AppIcon>}
      <AppText style={{ fontSize: 16, textAlign: 'center' }}>{item.title}</AppText>
    </TouchableOpacity>
  }

  return (
    <View style={[styles.container, { backgroundColor: colorApp.backgroundColor, justifyContent: "center" }]}>
      {menuHome.map((item, index) => {
        return renderItemMenu(item, index)
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  banner: {
    height: SizeRpScreen.width(100) * 9 / 16,
    width: SizeRpScreen.width(100),
  }
})

