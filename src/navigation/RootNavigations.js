import React from "react";
import { keyNavigation } from "./KeyNavigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { randomAnimationsScreen } from "@util/RandomValueHandleActions";

//Danh sách element ref:
import AppModalContent from "../element/AppModalContent";
import ServiceAppAlertModal from "../services/ServiceAppModalContent";

//Danh sách các màn hình:
import RegisterScreen from "../screen/Register";
import AppIntroScreen from "../screen/AppIntro";
import HomeScreen from "../screen/Home";
import LoginScreen from "../screen/Login";
import PolicyScreen from "../screen/Policy";

//Màn Basic:
import BasicJsScreen from "../screen/BasicJS";
import BasicTsScreen from "../screen/BasicTS";

const RootStack = createNativeStackNavigator();
export default RootNavigations = () => {

  return (
    <>
      <RootStack.Navigator
        orientation={"portrait"}
        animation={randomAnimationsScreen()}
        initialRouteName={keyNavigation.APP_INTRO}
        screenOptions={{ headerShown: false }}
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          gestureEnabled: true,
        })}
      >
        <RootStack.Screen
          name={keyNavigation.APP_INTRO}
          component={AppIntroScreen}
        />
        <RootStack.Screen name={keyNavigation.REGISTER} component={RegisterScreen} />
        <RootStack.Screen name={keyNavigation.LOGIN} component={LoginScreen} />
        <RootStack.Screen name={keyNavigation.HOME} component={HomeScreen} />
        <RootStack.Screen name={keyNavigation.POLICY} component={PolicyScreen} />
        <RootStack.Screen name={keyNavigation.BASIC_JS} component={BasicJsScreen} />
        <RootStack.Screen name={keyNavigation.BASIC_TS} component={BasicTsScreen} />
      </RootStack.Navigator>
      <AppModalContent ref={ServiceAppAlertModal.modalRef} />
    </>
  );
};
