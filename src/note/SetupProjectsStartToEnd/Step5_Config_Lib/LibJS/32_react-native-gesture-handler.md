# react-native-gesture-handler
Chức năng: Xử lý thao tác + cử chỉ hành động
Link: https://github.com/software-mansion/react-native-gesture-handler
# Cài đặt: 
Bước 1: yarn add react-native-gesture-handler

Bước 2: import { GestureHandlerRootView } from "react-native-gesture-handler" vào App.js
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
