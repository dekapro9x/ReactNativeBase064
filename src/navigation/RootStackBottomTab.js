import { AppIcon } from "@element/AppIcon";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Account from "@screen/Account";
import Discovery from "@screen/Discovery";
import Pushnotification from "@screen/PushNotifications";
import React from "react";
import { keyNavigation } from "./KeyNavigations";
import { RootStackDrawer } from "./RootStackDrawer";

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
            <AppIcon type={"MaterialCommunityIcons"} name="bell" color={color} size={26}></AppIcon>
        }}
      />
      <BottomStack.Screen
        name={keyNavigation.ROOT_STACK_DRAWER}
        component={RootStackDrawer}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color }) =>
          <AppIcon type={"MaterialCommunityIcons"} name="home" color={color} size={26}></AppIcon>
        }}
      />
      <BottomStack.Screen
        name={keyNavigation.DISCOVERY}
        component={Discovery}
        options={{
          tabBarLabel: "Khám phá",
          tabBarIcon: ({ color }) =>
          <AppIcon type={"FontAwesome"} name="cc-discover" color={color} size={26}></AppIcon>
        }}
      />
      <BottomStack.Screen
        name={keyNavigation.ACCOUNT}
        component={Account}
        options={{
          tabBarLabel: "Cá nhân",
          tabBarIcon: ({ color }) =>
          <AppIcon type={"MaterialCommunityIcons"} name="account" color={color} size={26}></AppIcon>
        }}
      />

    </BottomStack.Navigator>
  );
}

export { RootStackBottomTab };

