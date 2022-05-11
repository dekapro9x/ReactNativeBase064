# react-native-pdf

Chức năng: Đọc file PDF.
Link: https://github.com/wonday/react-native-pdf

# Cài đặt:

Bước 1: yarn add react-native-pdf rn-fetch-blob @react-native-community/progress-bar-android @react-native-community/progress-view

Bước 2: Trong android/app/build.gradle:

android {
+    packagingOptions {
+       pickFirst 'lib/x86/libc++_shared.so'
+       pickFirst 'lib/x86_64/libjsc.so'
+       pickFirst 'lib/arm64-v8a/libjsc.so'
+       pickFirst 'lib/arm64-v8a/libc++_shared.so'
+       pickFirst 'lib/x86_64/libc++_shared.so'
+       pickFirst 'lib/armeabi-v7a/libc++_shared.so'
+     }
   }

