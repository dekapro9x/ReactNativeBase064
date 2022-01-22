import { createDrawerNavigator } from "@react-navigation/drawer";
const DrawerStack = createDrawerNavigator();
import HomeScreen from "../screen/Home";
import { keyNavigation } from "./KeyNavigations";
import React from "react";
import { View, Button } from "react-native";
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function RootStackDrawer() {
  return (
    <DrawerStack.Navigator screenOptions={{ headerShown: false }}>
      <DrawerStack.Screen name={keyNavigation.HOME} component={HomeScreen} />
      <DrawerStack.Screen name="Noti" component={NotificationsScreen} />
    </DrawerStack.Navigator>
  );
}

export { RootStackDrawer };

