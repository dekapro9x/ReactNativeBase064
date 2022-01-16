import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screen/Home";
const BottomTab = createMaterialBottomTabNavigator();
function TabsMenuBottomHome() {
  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "tomato" }}
    >
      <BottomTab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="bell" color={color} size={26} />
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="account" color={color} size={26} />
        }}
      />
    </BottomTab.Navigator>
  );
}

export default TabsMenuBottomHome;
