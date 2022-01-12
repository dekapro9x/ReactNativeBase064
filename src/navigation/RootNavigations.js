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
import BasicScreen from "../screen/Basic";
import PolicyScreen from "../screen/Policy";
//Menu Home:
import TabsMenuBottomHome  from "./RootStackBottomMenuHome";

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
      <RootStack.Screen name={keyNavigation.BASIC} component={BasicScreen} />
      <RootStack.Screen name={keyNavigation.POLICY} component={PolicyScreen} />
      <RootStack.Screen name={keyNavigation.BOTTOM_TAB} component={TabsMenuBottomHome} />
    </RootStack.Navigator>
    <AppModalContent ref={ServiceAppAlertModal.modalRef} />
    </>
  );
});
