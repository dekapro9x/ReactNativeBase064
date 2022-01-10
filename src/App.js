import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { AppContext } from "./context/AppContext";
import RootNavigations from "./navigation/RootNavigations";

function App() {
  return (
    <AppContext>
      <NavigationContainer>
        <RootNavigations />
      </NavigationContainer>
    </AppContext>
  );
}

export default App;
