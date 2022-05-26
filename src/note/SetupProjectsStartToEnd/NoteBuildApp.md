# 1. Fix bug build:
   lintOptions {
   disable 'InvalidPackage'
   checkReleaseBuilds false
   }
# 2.Lệnh code push:
git commit -m"Build bundle JS code push versions 12 for 1.0.13"
appcenter codepush release-react -a dekapro9x-gmail.com/ReactNativeBase -d Staging -m

# 3: Fix chạy Android lỗi duplicate native bug could not find com.eightbitlab:blurview:1.6.3
        minSdkVersion = 23
        compileSdkVersion = 32
        targetSdkVersion = 31
=> Trong android/app/build.gradle thêm jcenter()

# 4: Bug không thể cài đặt được file APK lên máy thật API 29 trở lên 
Lỗi này gây ra khi xin quyền :
MANAGE_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE and READ_EXTERNAL_STORAGE

Log native:
2022-05-13 15:44:48.026 19733-19733/? W/System.err: java.io.FileNotFoundException: /data/logswitch/switch.xml: open failed: EACCES (Permission denied)
https://stackoverflow.com/questions/58430070/android-apiv29-filenotfoundexception-eacces-permission-denied
Starting with Android 11 the storage permission is getting revoked and developers would need to consider alternative ways of accessing the storage they need either through SAF or Media Store. For the time being, you can carry on using what you’re using by adding the following in your manifest within the application tags:
# android:requestLegacyExternalStorage="true"

You might want to consider changing your minSDK to 19 and use getExternalFilesDir() to get a path that doesn’t require any permissions.
=> Cách sửa:
https://trendoceans.com/how-to-fix-exception-open-failed-eacces-permission-denied-on-android/

# 5: Lỗi Android APK có thể cài được trên máy ảo nhưng không thể cài đặt được lên máy thật với Android:
https://github.com/lottie-react-native/lottie-react-native/issues/269
# Trong build.gradle
project.ext.react = [
    enableHermes: false,  // react-native-reanimated/plugin (false=>true)
    entryFile: "index.js",
    bundleAssetName: "index.android.bundle",
    bundleInDebug: true,
    bundleInRelease: true
]

dependencies {
    //Fix bug Android 11 not working:
    implementation("com.squareup.okhttp3:okhttp:4.9.1")
    implementation("com.squareup.okhttp3:okhttp-urlconnection:4.9.1")
    compile "com.google.android.gms:play-services-base:+"
    compile 'com.google.android.gms:play-services-location:+'
    compile 'com.google.android.gms:play-services-maps:+'
    }

# Trong AndroidManifest.xml :
Sửa tools:targetApi="31"

# Cài đặt build APK tự động set tên file: 
//Set tên file build APK:
setProperty("archivesBaseName", "RN_Base(Ver.$versionName)" + ".$versionCode")

# Build versions vs packages mới chạy trên 1 devices mà không lẫn nhau:
applicationIdSuffix ".dev"