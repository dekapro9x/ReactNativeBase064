# 1. Fix bug build:
   lintOptions {
   disable 'InvalidPackage'
   checkReleaseBuilds false
   }
# 2.Lệnh code push:
const VersionApp = "1.0.12";
const VersionCodePush = "14";
git commit -m"Build bundle JS code push versions 15 for 1.0.12";
appcenter codepush release-react -a dekapro9x-gmail.com/ReactNativeBase -d Staging -m;
