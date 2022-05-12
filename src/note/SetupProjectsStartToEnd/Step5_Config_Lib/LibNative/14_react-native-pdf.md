# react-native-pdf

Chức năng: Đọc file PDF.
Link: https://github.com/wonday/react-native-pdf
https://www.npmjs.com/package/react-native-blob-util


# Cài đặt:

Bước 1: yarn add 
+ react-native-pdf 
+ rn-fetch-blob
+ @react-native-community/progress-bar-android 
+ @react-native-community/progress-view
+ react-native-blob-util

Bước 3: Trong android/app/build.gradle:

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

# Chú ý:
https://bytemeta.vip/repo/wonday/react-native-pdf/issues/649
issue fixed by downgrading react-native-blob-util version from 0.16.0 to 0.13.14 (the version used in the example project) adding trustAllCerts={false} prop to the PDF component fixes the issue without downgrading blob-util version
