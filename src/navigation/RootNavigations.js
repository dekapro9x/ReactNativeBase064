import React from 'react';
import {keyNavigation} from './KeyNavigations';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const RootStack = createNativeStackNavigator();
//Danh sách các màn hình:
import AppIntroScreen from "../screen/AppIntro";
import HomeScreen from '../screen/Home';
import LoginScreen from "../screen/Login";

export default RootNavigations =()=>{
    return (
        <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={keyNavigation.APP_INTRO} component={AppIntroScreen} />
        <RootStack.Screen name={keyNavigation.LOGIN} component={LoginScreen} />
        <RootStack.Screen name={keyNavigation.HOME} component={HomeScreen} />
      </RootStack.Navigator>
    )
}


