# 1. Fix bug build:
   lintOptions {
   disable 'InvalidPackage'
   checkReleaseBuilds false
   }
# 2.Lệnh code push:
git commit -m"Build bundle JS code push versions 12 for 1.0.13"
appcenter codepush release-react -a dekapro9x-gmail.com/ReactNativeBase -d Staging -m
