# react-native-bottom-sheet
Chức năng: Mở modal với thao tác vuốt từ dưới lên.
Link: https://gorhom.github.io/react-native-bottom-sheet/v2/
# Cài đặt: 
Bước 1: yarn add @gorhom/bottom-sheet@^2
Bước 2: Demo trong Animated =>  react-native-bottom-sheet
# Chú ý:
Projects này sử dụng bottom sheet V2 đi kèm với:
+ "@gorhom/bottom-sheet": "^2"
+ "react-native-reanimated": "1.13.1"
+ "react-native-gesture-handler": "^1.10.3"

Android không handle được cử chỉ vuốt lên:
https://github.com/gorhom/react-native-bottom-sheet/issues/895
Cách sửa:
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
