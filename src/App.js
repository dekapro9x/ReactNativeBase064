import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { AppContext } from "./context/AppContext";
import RootNavigations from "./navigation/RootNavigations";
import { NavigationService } from "@services/NavigationService";

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
