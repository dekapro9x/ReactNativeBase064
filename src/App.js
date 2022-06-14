import { NavigationContainer } from "@react-navigation/native";
import appReducers from '@redux/reducers';
import { NavigationService } from "@services/NavigationService";
import * as React from "react";
import codePush from 'react-native-code-push';
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { enableScreens } from "react-native-screens";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppContext } from "./context/AppContext";
import RootStackNavigations from "./navigation/RootStackNavigations";

enableScreens();
export const store = createStore(
  appReducers
)

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
};

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppContext>
          <NavigationContainer
            ref={ref => {
              NavigationService.current = ref;
            }}
          >
            <RootStackNavigations />
          </NavigationContainer>
        </AppContext>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default codePush(codePushOptions)(App);

