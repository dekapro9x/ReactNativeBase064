import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screen/Home";
import { keyNavigation } from "./KeyNavigations";
const BottomStack = createMaterialBottomTabNavigator();
function RootStackBottomTab() {
  return (
    <BottomStack.Navigator
      initialRouteName={keyNavigation.HOME}
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "tomato" }}
    >
      <BottomStack.Screen
        name={keyNavigation.HOME}
        component={HomeScreen}
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
