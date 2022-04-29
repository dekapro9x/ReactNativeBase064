import { NavigationContainer } from "@react-navigation/native";
import { NavigationService } from "@services/NavigationService";
import * as React from "react";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { enableScreens } from "react-native-screens";
import { AppContext } from "./context/AppContext";
import RootStackNavigations from "./navigation/RootStackNavigations";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducers from '@redux/reducers';
import codePush from 'react-native-code-push';

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
  );
}

export default codePush(codePushOptions)(App);

