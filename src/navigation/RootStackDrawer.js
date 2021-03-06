import AppDrawer from "@element/AppDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from "react";
import { View } from "react-native";
import HomeScreen from "../screen/Home";
import { keyNavigation } from "./KeyNavigations";
const DrawerStack = createDrawerNavigator();

//Danh sách màn hình Drawer:
import InfoDevicesApp from "@screen/InfoDevicesApp";
import SystemLogScreen from "@screen/LogSystem";


function RootStackDrawer({ navigation, router }) {
  const [canRenderDrawer, setStateIsCanRenderDrawer] = useState(false);
  const countTimeOut = useRef(0);
  const menuDrawer = [
    {
      "title": "Sub Menu",
      "data": [
        "App versions",
        "App Log Systems"
      ]
    },
  ]

  useFocusEffect(
    useCallback(() => {
      countTimeOut.current = setTimeout(() => {
        setStateIsCanRenderDrawer(true)
      }, 200)
      return () => {
        setStateIsCanRenderDrawer(false);
        clearTimeout(countTimeOut.current);
      };
    }, [])
  );

  const drawerContent = () => {
    if (canRenderDrawer) {
      return (
        <AppDrawer canRenderDrawer={canRenderDrawer} dataMenuDrawer={menuDrawer} />
      )
    }
    return (
      <View style={{ backgroundColor: "transparent", flex: 1 }}>
      </View>
    )
  }

  return (
    <DrawerStack.Navigator
      drawerLabel={{ focused: false }}
      swipeEnabled={false}
      gestureEnabled={false}
      drawerContent={drawerContent}
      initialRouteName={keyNavigation.HOME}
      screenOptions={{
        drawerStatusBarAnimation: "slide",
        headerShown: false,
        gestureEnabled: false,
        disableSwiping: true
      }}>
      <DrawerStack.Screen
        name={keyNavigation.HOME} component={HomeScreen} />
      <DrawerStack.Screen
        name={keyNavigation.INFO_DEVICES_AND_APP} component={InfoDevicesApp} />
      <DrawerStack.Screen
        name={keyNavigation.SYSTEM_LOG} component={SystemLogScreen} />
    </DrawerStack.Navigator>
  );
}

export { RootStackDrawer };

