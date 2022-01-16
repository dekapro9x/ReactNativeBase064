import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { AppContext } from "./context/AppContext";
import RootNavigations from "./navigation/RootNavigations";
import { NavigationService } from "@services/NavigationService";
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
enableScreens();

function App() {
  return (
    <AppContext>
      <NavigationContainer ref={(ref) => { NavigationService.current = ref }}>
        <RootNavigations />
      </NavigationContainer>
    </AppContext>
  );
}

export default App;
