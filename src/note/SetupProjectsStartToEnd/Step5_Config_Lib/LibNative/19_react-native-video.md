# react-native-video
https://github.com/react-native-video/react-native-video
Mục đích: Tạo component css theo định nghĩa sẵn:

# Cài đặt:

Bước 1: yarn add react-native-video

Bước 2: android/settings.gradle
include ':react-native-video'
project(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android')

Bước 3: android/app/build.gradle
implementation "androidx.appcompat:appcompat:1.0.0"

Bước 4: android/gradle.properties   
android.useAndroidX=true
android.enableJetifier=true

Bước 5: MainApplication.java
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.asList(
            new MainReactPackage(),
            new ReactVideoPackage()
    );
}