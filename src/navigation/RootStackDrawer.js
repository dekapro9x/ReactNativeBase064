import { createDrawerNavigator } from "@react-navigation/drawer";
import  InfoDevicesApp  from "@screen/InfoDevicesApp";
import React from "react";
import HomeScreen from "../screen/Home";
import { keyNavigation } from "./KeyNavigations";
const DrawerStack = createDrawerNavigator();
function RootStackDrawer() {
  return (
    <DrawerStack.Navigator
      initialRouteName={keyNavigation.HOME}
      screenOptions={{ headerShown: false }}>
      <DrawerStack.Screen name={keyNavigation.HOME} component={HomeScreen} />
      <DrawerStack.Screen name={keyNavigation.INFO_DEVICES_AND_APP} component={InfoDevicesApp} />
    </DrawerStack.Navigator>
  );
}

export { RootStackDrawer };

