import { versionsBuildsAPK } from '@const/Setting';
import { FontAppType } from '@const/TypeFontFamily';
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
  const numberColum = useRef(5).current;

  useEffect(() => {
    const { dataMenu } = props;
    const listMenu = dataMenu.filter((item) => item.endpointVersion == versionsBuildsAPK);
    setStateMenuHome(listMenu);
  }, [props.dataMenu]);

  const navigateToScreen = (item) => async () => {
    await writeLogSystem(keyLogSystem.menuClick, `${item.id}`);
    const { navigation } = props;
    navigation.navigate(item.id, { menuClick: item });
  }

  const renderItemMenu = (item, index) => {
    return <TouchableOpacity
      activeOpacity={0.8}
      key={`${index}`}
      onPress={navigateToScreen(item)}
      style={{
        height: SizeRpScreen.device_width / numberColum - 5 + 12,
        width: SizeRpScreen.device_width / numberColum - 5,
        backgroundColor: white,
        margin: 1,
        borderWidth: SizeRpScreen.device_width * 0.002,
        borderColor: green400,
        borderRadius: 0,
        alignItems: "center", justifyContent: "center"
      }}>
      {item?.iconImg ?
        <AppImage
          resizeMode={"center"}
          source={{ uri: item.iconImg }}
          style={{ height: 35, width: 35 }}></AppImage> :
        <AppIcon type={item.iconType} name={item.iconName} color={item.iconColor} iconSize={item.iconSizeMenu}>
        </AppIcon>}
      <AppText style={{ fontSize: item.title && item.title.length > 10 ? 10 : 12, textAlign: 'center', fontFamily: FontAppType.Champagne, fontWeight: "bold" }}>{item.title}</AppText>
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

