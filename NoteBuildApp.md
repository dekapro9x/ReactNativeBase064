# 1. Fix bug build:

lintOptions {
disable 'InvalidPackage'
checkReleaseBuilds false
}

# 2.Lệnh code push:

const VersionApp = "1.0.18";
const VersionCodePush = 1";
git commit -m"Build bundle JS code push versions 1 for 1.0.18"
git commit -m"Build APK 1.0.18"
appcenter codepush release-react -a dekapro9x-gmail.com/ReactNativeBase -d Staging -m

# Note Versions:

# 1.0.14 APK (react-native-camera)

# 1.0.15 APK (Add permissions Android):RECORD_AUDIO,READ_EXTERNAL_STORAGE,WRITE_EXTERNAL_STORAGE.

# 1.0.16 Update gesture-handle APK

# 1.0.17 Setup react-native-visons-camera , blur 

# 1.0.18 Setup react-native-pdf 
