import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";
import * as React from 'react';
import RootNavigations from './navigation/RootNavigations';
function App() {
  return (
    <NavigationContainer>
      <RootNavigations></RootNavigations>
    </NavigationContainer>
  );
}

export default App;
