react-native-geolocation-service Link: https://github.com/Agontuk/react-native-geolocation-service Lấy thông tin truy cập vị trí hiện tại yêu cầu cần có permission: yarn add react-native-geolocation-service

IOS:
auto linking

Android: build.gradle
Thêm: googlePlayServicesVersion = "+"

Demo:
ext { buildToolsVersion = "29.0.2" minSdkVersion = 21 compileSdkVersion = 29 targetSdkVersion = 29 // Cấu hình truy cập vị trí: googlePlayServicesVersion = "+" }

compile "com.google.android.gms:play-services:10.0.1"