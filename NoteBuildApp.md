# 1. Fix bug build:
   lintOptions {
   disable 'InvalidPackage'
   checkReleaseBuilds false
   }
# 2.Lệnh code push:
appcenter codepush release-react -a dekapro9x-gmail.com/ReactNativeBase -d Staging -m
