react-native-camera
Link: https://react-native-community.github.io/react-native-camera/docs/installation.html

yarn add react-native-camera

# Android:android/app/src/main/AndroidManifest.xml

<!-- Required -->
<uses-permission android:name="android.permission.CAMERA" />

<!-- Include this only if you are planning to use the camera roll -->
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

<!-- Include this only if you are planning to use the microphone for video recording -->
<uses-permission android:name="android.permission.RECORD_AUDIO"/>

# android/app/build.gradle:

defaultConfig {
applicationId "com.rn_base"
minSdkVersion rootProject.ext.minSdkVersion
targetSdkVersion rootProject.ext.targetSdkVersion
versionCode 1
versionName "1.0"
missingDimensionStrategy 'react-native-camera', 'general' //Thêm dòng này nếu cấu hình Camera
}

# Lưu ý: https://stackoverflow.com/questions/53133792/firebase-duplicate-classes-error-after-update
Lỗi Firebase duplicate classes error after update
    //Fix camera:
    implementation 'com.google.android.gms:play-services-vision:20.1.1'
    implementation 'com.google.android.gms:play-services-vision-common:19.1.1'
    implementation 'com.google.firebase:firebase-ml-vision-image-label-model:20.0.2'
    implementation 'com.google.android.gms:play-services-vision-face-contour-internal:16.0.3'
    implementation 'com.google.android.gms:play-services-vision-image-labeling-internal:16.0.5'
    implementation 'com.google.android.gms:play-services-vision-image-label:18.0.5'
    implementation 'com.google.firebase:firebase-ml-vision-face-model:20.0.2'
    implementation 'com.google.firebase:firebase-ml-model-interpreter:22.0.4'


# IOS:

pod install
