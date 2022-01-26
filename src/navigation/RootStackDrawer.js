import Appdrawer from "@element/AppDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFocusEffect } from '@react-navigation/native';
import InfoDevicesApp from "@screen/InfoDevicesApp";
import React, { useCallback, useRef, useState } from "react";
import { View } from "react-native";
import HomeScreen from "../screen/Home";
import { keyNavigation } from "./KeyNavigations";

const DrawerStack = createDrawerNavigator();

function RootStackDrawer({ navigation, router }) {
  const [canRenderDrawer, setStateIsCanRenderDrawer] = useState(false);
  const countTimeOut = useRef(0);
  useFocusEffect(
    useCallback(() => {
      countTimeOut.current = setTimeout(() => {
        setStateIsCanRenderDrawer(true)
      }, 3000)
      return () => {
        setStateIsCanRenderDrawer(false);
      };
    }, [])
  );
  const drawerContent = () => {
    console.log("canRenderDrawer>>", canRenderDrawer);
    if (canRenderDrawer) {
      return (
        <Appdrawer />
      )
    }
    return (
      <View style={{ width: 0, height: 0, backgroundColor: "transparent" }}>

      </View>
    )

  }
  return (
    <DrawerStack.Navigator
      drawerLabel={{ focused: false }}
      swipeEnabled={false}
      gestureEnabled={false}
      drawerContent={drawerContent}
      lazy={false}
      initialRouteName={keyNavigation.HOME}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
        },
        headerShown: false,
        gestureEnabled: false,
        disableSwiping: true
      }}>
      <DrawerStack.Screen name={keyNavigation.HOME} component={HomeScreen} />
      <DrawerStack.Screen name={keyNavigation.INFO_DEVICES_AND_APP} component={InfoDevicesApp} />
    </DrawerStack.Navigator>
  );
}

export { RootStackDrawer };

