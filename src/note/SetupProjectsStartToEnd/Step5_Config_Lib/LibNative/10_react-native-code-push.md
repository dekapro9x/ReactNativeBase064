# react-native-code-push

Chức năng: Plugin này cung cấp tích hợp phía máy khách cho dịch vụ CodePush, cho phép bạn dễ dàng thêm trải nghiệm cập nhật động vào (các) ứng dụng gốc React của bạn.
Link: https://github.com/microsoft/react-native-code-push#how-does-it-work

# Cài đặt:

1. Bước 1: yarn add react-native-code-push
2. Bước 2: npm install -g appcenter-cli
3. Bước 3: appcenter codepush release-react -a dekapro9x-gmail.com/ReactNativeBase -d Staging

# Chạy tiếp lệnh : appcenter login

# IOS:

yarn add react-native-code-push

cd ios && pod install && cd ..

# Config trong AppDelegate.m thêm :

#import <CodePush/CodePush.h>

Tìm đoạn mã sau :return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"]

=> Chuyển thành : return [CodePush bundleURL]

# Đoạn code sau chuyển đổi sẽ như này:

- (NSURL _)sourceURLForBridge:(RCTBridge _)bridge
  {
  #if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  #else
  return [CodePush bundleURL];
  #endif
  }

  # Thêm key Code push vào info.split trên dòng <key>NSAppTransportSecurity</key>

  <key>CodePushDeploymentKey</key>
  <string>Key IOS</string>

  # Vào file App.js setup Code push:

  import codePush from 'react-native-code-push';

  const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  };

export default codePush(codePushOptions)(App);

# Android:
# Bước 1: Trong MainApplication.java thêm 
import com.microsoft.codepush.react.CodePush;
Trong đoạn private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
...
// Thêm :
@Override
protected String getJSBundleFile() {
return CodePush.getJSBundleFile();
}
}

# Bước 2: react-native link react-native-code-push
android/settings.gradle
apply from: "../../node_modules/react-native/react.gradle"
apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"

# Bước 3: Trong tring.xml :
    <string moduleConfig="true" name="CodePushDeploymentKey">aOtKAUp3F-0GLZqIVyoLLaqVAfZabbR8ok4lQ</string>

# Bước 4: # Trong build.gradle kiểm tra xem

buildscript {
ext {
buildToolsVersion = "29.0.2"
minSdkVersion = 21
compileSdkVersion = 29
targetSdkVersion = 29
supportLibVersion = "29.0.0"
// Cấu hình truy cập vị trí:
googlePlayServicesVisionVersion = "19.0.0"

    }

# Bước 5: react-native.config.js
module.exports = {
dependencies: {
'react-native-code-push': {
platforms: {
android: {
sourceDir: '../node_modules/react-native-code-push/android/app',
},
},
},
},
project: {
ios: {},
android: {}, // grouped into "project"
},
assets: ['./assets/fonts/', 'react-native-vector-icons'], // stays the same
};

# Bước 6: Chạy lệnh yarn react-native link

# Sửa lỗi vượt quá 64k phương thức trong Android: build.gradle

defaultConfig {
...

        // Enabling multidex support.

# Thêm : multiDexEnabled true

    }
