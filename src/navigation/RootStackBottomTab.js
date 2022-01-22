import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { keyNavigation } from "./KeyNavigations";
import { RootStackDrawer } from "./RootStackDrawer";

const BottomStack = createMaterialBottomTabNavigator();
function RootStackBottomTab() {
  return (
    <BottomStack.Navigator
      initialRouteName={keyNavigation.ROOT_STACK_DRAWER}
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "tomato" }}
    >
      <BottomStack.Screen
        name={keyNavigation.ROOT_STACK_DRAWER}
        component={RootStackDrawer}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="bell" color={color} size={26} />
        }}
      />
    </BottomStack.Navigator>
  );
}

export { RootStackBottomTab };
