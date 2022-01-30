import { AppIcon } from "@element/AppIcon";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Account from "@screen/Account";
import Discovery from "@screen/Discovery";
import Pushnotification from "@screen/PushNotifications";
import React from "react";
import I18n from 'react-native-i18n';
import { connect } from "react-redux";
import { keyNavigation } from "./KeyNavigations";
import { RootStackDrawer } from "./RootStackDrawer";
const BottomStack = createMaterialBottomTabNavigator();
const mapStateToProps = (GlobalState) => {
  const { LanguageReducer } = GlobalState;
  return {
    languageCurrent: LanguageReducer.language
  };
};

function RootStackBottomTabBase(props) {
  const { languageCurrent } = props;
  console.log("languageCurrent", languageCurrent);
  const { translations } = I18n;
  console.log("translations", translations);
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
          tabBarLabel: translations[languageCurrent]?.notifications,
          tabBarIcon: ({ color }) =>
            <AppIcon type={"MaterialCommunityIcons"} name="bell" color={color} size={26}></AppIcon>
        }}
      />
      <BottomStack.Screen
        name={keyNavigation.ROOT_STACK_DRAWER}
        component={RootStackDrawer}
        options={{
          tabBarLabel: translations[languageCurrent]?.home,
          tabBarIcon: ({ color }) =>
            <AppIcon type={"MaterialCommunityIcons"} name="home" color={color} size={26}></AppIcon>
        }}
      />
      <BottomStack.Screen
        name={keyNavigation.DISCOVERY}
        component={Discovery}
        options={{
          tabBarLabel: translations[languageCurrent]?.discovery,
          tabBarIcon: ({ color }) =>
            <AppIcon type={"FontAwesome"} name="cc-discover" color={color} size={26}></AppIcon>
        }}
      />
      <BottomStack.Screen
        name={keyNavigation.ACCOUNT}
        component={Account}
        options={{
          tabBarLabel: translations[languageCurrent]?.account,
          tabBarIcon: ({ color }) =>
            <AppIcon type={"MaterialCommunityIcons"} name="account" color={color} size={26}></AppIcon>
        }}
      />
    </BottomStack.Navigator>
  );
}
const RootStackBottomTab = connect(mapStateToProps, null)(RootStackBottomTabBase);

export { RootStackBottomTab };

