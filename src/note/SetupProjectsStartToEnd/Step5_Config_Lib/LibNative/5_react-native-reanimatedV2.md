# react-native-reanimated
Chức năng: Tăng tốc xử lý khung hình, các animations...
Link: https://docs.swmansion.com/react-native-reanimated/
# Cài đặt: 
1. Bước 1: yarn add react-native-responsive-screen

2. Bước 2: Thêm plugin babel của Reanimated vào babel.config.js:
  module.exports = {
      ...
      plugins: [
          ...
          'react-native-reanimated/plugin',
      ],
  };
# THẬN TRỌNG
+ Plugin được thiết lập lại phải được liệt kê cuối cùng.

3. Bước 3: Plug Reanimated in MainApplication.java
# Sử dụng:
  import com.facebook.react.bridge.JSIModulePackage; // <- add
  import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add
  ...
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
  ...

      @Override
      protected String getJSMainModuleName() {
        return "index";
      }

      @Override
      protected JSIModulePackage getJSIModulePackage() {
        return new ReanimatedJSIModulePackage(); // <- add
      }
    };
  ...
# Chú ý : 
Khi cấu hình chú ý: import pulgin cho vào cuối cùng.
https://github.com/software-mansion/react-native-reanimated/issues/1875