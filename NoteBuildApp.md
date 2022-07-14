# 1. Fix bug build:

lintOptions {
disable 'InvalidPackage'
checkReleaseBuilds false
}

# 2.Lệnh code push:

const VersionApp = "1.0.28";
const VersionCodePush = 1";
git commit -m"Build bundle JS code push versions 1 for 1.0.28"
git commit -m"Build APK 1.0.28"
appcenter codepush release-react -a dekapro9x-gmail.com/ReactNativeBase -d Staging -m

# Note Versions:

# 1.0.14 APK (react-native-camera)

# 1.0.15 APK (Add permissions Android):RECORD_AUDIO,READ_EXTERNAL_STORAGE,WRITE_EXTERNAL_STORAGE.

# 1.0.16 Update gesture-handle APK

# 1.0.17 Setup react-native-visons-camera , blur

# 1.0.18 Setup react-native-pdf

# 1.0.19 Native Module Android (SMS) + Permission sent SMS.

# 1.0.20 React-native-fs , write file log system, reduce size APK.

https://stackoverflow.com/questions/60630065/how-to-reduce-android-apk-size-in-react-native
def enableProguardInReleaseBuilds = true
def enableSeparateBuildPerCPUArchitecture = true
Build file APK bằng Android Studio => 4 file/tách biệt. Nếu muốn giảm size hơn nữa thì build file .abb
OppoF9 phù hợp với file : armeabi-v7a APK

# 1.0.21 react-native-voice : Speed sound to text

# 1.0.22 react-native-youtube : Play video youtube Android

# 1.0.23 react-native-socket-io : Chat mess

# 1.0.24 Update server - client: API login, axios, nodeJsServer.

# 1.0.25 react-native-video

# 1.0.26 Update animations/UI table (react-native-paper)

# 1.0.27 Config CI/CD 
https://codemagic.io/
https://morioh.com/p/a551f81cc201 (Example)
git add codemagic.yaml
git commit -m "Update Codemagic configuration"
git push origin root

# 1.0.28 react-native-image-picker && react-native-camera-roll
Xử lý file ảnh trong media file
