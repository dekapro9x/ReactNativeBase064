import React, { useEffect } from "react";
import { keyNavigation } from "./KeyNavigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { randomAnimationsScreen } from "@util/RandomValueHandleActions";

//Danh sách element ref:
import AppModalContent from "../element/AppModalContent";
import ServiceAppAlertModal from "../services/ServiceAppModalContent";

//Danh sách các màn hình:
import RegisterScreen from "../screen/Register";
import AppIntroScreen from "../screen/AppIntro";
import LoginScreen from "../screen/Login";
import PolicyScreen from "../screen/Policy";
import WeatherScreen from "../screen/Weather";
import AnimationsScreen from "@screen/Animations";
import Map from "@screen/Map";
import Basic from "@screen/BasicScreen";
import Camera from "@screen/Camera";
import BaseMenuScreen from "@screen/BaseScreenMenu";
import File from "@screen/File";
import NativeModuleAndroid from "@screen/NativeModuleAndroid";
import Sound from "@screen/Sound";
import Webview from "@screen/WebView";
import Video from "@screen/Video";
import Socket from "@screen/Socket";
import ServeNodeJS from "@screen/ServerNodeJS";
import Chart from "@screen/Chart";
import FireBase from "@screen/FireBase";
import Security from "@screen/Security";
import MiniApp from "@screen/MiniApp";
import FrequentlyQuestions from "@screen/FrequentlyQuestions";
import PDA from "@screen/PDA";
import Algorithm from "@screen/Algorithm";

//Stack Bottom Tab Menu Home:
import { RootStackBottomTab } from "./RootStackBottomTab";

//Màn Basic:
import actions from "@redux/actions";
import BasicJsScreen from "../screen/BasicJS";
import BasicTsScreen from "../screen/BasicTS";
import { useDispatch } from 'react-redux';
import { keyAsyncStorage } from "@const/KeySyncStorage";
import { LanguageAppType } from "@const/TypeLanguage";

const RootStack = createNativeStackNavigator();

export default RootNavigations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    languageSetup();
    return () => {
    };
  }, []);

  const languageSetup = async () => {
    const languageCurrent = await AsyncStorage.getItem(keyAsyncStorage.language);
    if (!languageCurrent) {
      languageCurrent = LanguageAppType.en;
      await AsyncStorage.setItem(keyAsyncStorage.language, LanguageAppType.en);
    }
    await dispatch(actions.changeLanguages(languageCurrent));
  }

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
        <RootStack.Screen name={keyNavigation.ROOT_STACK_BOTTOM} component={RootStackBottomTab} />
        <RootStack.Screen name={keyNavigation.POLICY} component={PolicyScreen} />
        <RootStack.Screen name={keyNavigation.BASIC_JS} component={BasicJsScreen} />
        <RootStack.Screen name={keyNavigation.BASIC_TS} component={BasicTsScreen} />
        <RootStack.Screen name={keyNavigation.WEATHER} component={WeatherScreen} />
        <RootStack.Screen name={keyNavigation.ANIMATIONS} component={AnimationsScreen} />
        <RootStack.Screen name={keyNavigation.MAP} component={Map} />
        <RootStack.Screen name={keyNavigation.BASIC} component={Basic} />
        <RootStack.Screen name={keyNavigation.CAMERA} component={Camera} />
        <RootStack.Screen name={keyNavigation.BASIC_MENU_SCREEN} component={BaseMenuScreen} />
        <RootStack.Screen name={keyNavigation.FILE} component={File} />
        <RootStack.Screen name={keyNavigation.NATIVE_MODULE_ANDROID} component={NativeModuleAndroid} />
        <RootStack.Screen name={keyNavigation.SOUND} component={Sound} />
        <RootStack.Screen name={keyNavigation.WEBVIEW} component={Webview} />
        <RootStack.Screen name={keyNavigation.VIDEO} component={Video} />
        <RootStack.Screen name={keyNavigation.SOCKET} component={Socket} />
        <RootStack.Screen name={keyNavigation.SERVER_NODEJS} component={ServeNodeJS} />
        <RootStack.Screen name={keyNavigation.CHART} component={Chart} />
        <RootStack.Screen name={keyNavigation.FIRE_BASE} component={FireBase} />
        <RootStack.Screen name={keyNavigation.SECURITY} component={Security} />
        <RootStack.Screen name={keyNavigation.MINI_APP} component={MiniApp} />
        <RootStack.Screen name={keyNavigation.FREQUENTLY_QUESTIONS} component={FrequentlyQuestions} />
        <RootStack.Screen name={keyNavigation.PDA} component={PDA} />
        <RootStack.Screen name={keyNavigation.ALGORITHM} component={Algorithm} />
      </RootStack.Navigator>
      <AppModalContent ref={ServiceAppAlertModal.modalRef} />
    </>
  );
};
