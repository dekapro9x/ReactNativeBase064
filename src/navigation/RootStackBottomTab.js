import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { keyNavigation } from "./KeyNavigations";
import { RootStackDrawer } from "./RootStackDrawer";
import Pushnotification from "@screen/PushNotifications";
import { white } from "@css/Color";
import Account from "@screen/Account";

const BottomStack = createMaterialBottomTabNavigator();
function RootStackBottomTab() {
  return (
    <BottomStack.Navigator
      lazy={true}
      initialRouteName={keyNavigation.ROOT_STACK_DRAWER}
      activeColor="#D53546"
      barStyle={{ backgroundColor: "#E5E5E5" }}
    >

      <BottomStack.Screen
        name={keyNavigation.PUSH_NOTIFICATIONS}
        component={Pushnotification}
        options={{
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="bell" color={color} size={26} />
        }}
      />
      <BottomStack.Screen
        name={keyNavigation.ROOT_STACK_DRAWER}
        component={RootStackDrawer}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="home" color={color} size={26} />
        }}
      />
      <BottomStack.Screen
        name={keyNavigation.ACCOUNT}
        component={Account}
        options={{
          tabBarLabel: "Cá nhân",
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="account" color={color} size={26} />
        }}
      />

    </BottomStack.Navigator>
  );
}

export { RootStackBottomTab };
