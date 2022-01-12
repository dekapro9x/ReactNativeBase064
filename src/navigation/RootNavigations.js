import React from "react";
import { keyNavigation } from "./KeyNavigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const RootStack = createNativeStackNavigator();

//Danh sách element ref:
import AppModalContent from "../element/AppModalContent";
import ServiceAppAlertModal from "../services/ServiceAppModalContent";

//Danh sách các màn hình:

import AppIntroScreen from "../screen/AppIntro";
import HomeScreen from "../screen/Home";
import LoginScreen from "../screen/Login";
import PolicyScreen from "../screen/Policy";

//Menu Home:
import TabsMenuBottomHome  from "./RootStackBottomMenuHome";

//Màn Basic:
import BasicJsScreen from "../screen/BasicJS";
import BasicTsScreen from "../screen/BasicTS";

export default (RootNavigations = () => {
  return (
    <>
    <RootStack.Navigator
      initialRouteName= {keyNavigation.APP_INTRO}
      screenOptions={{headerShown: false}}
    >
      <RootStack.Screen
        name={keyNavigation.APP_INTRO}
        component={AppIntroScreen}
      />
      <RootStack.Screen name={keyNavigation.LOGIN} component={LoginScreen} />
      <RootStack.Screen name={keyNavigation.HOME} component={HomeScreen} />
      <RootStack.Screen name={keyNavigation.POLICY} component={PolicyScreen} />
      <RootStack.Screen name={keyNavigation.BOTTOM_TAB} component={TabsMenuBottomHome} />
      <RootStack.Screen name={keyNavigation.BASIC_JS} component={BasicJsScreen} />
      <RootStack.Screen name={keyNavigation.BASIC_TS} component={BasicTsScreen} />
    </RootStack.Navigator>
    <AppModalContent ref={ServiceAppAlertModal.modalRef} />
    </>
  );
});
