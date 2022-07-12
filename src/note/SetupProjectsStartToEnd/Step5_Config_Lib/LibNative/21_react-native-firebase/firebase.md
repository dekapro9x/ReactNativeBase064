Cài đặt react-native firebase:
Bước 1 : Truy cập  https://rnfirebase.io/
Bước 2 : Cài đặt 
# yarn add @react-native-firebase/app
Bước 3: Android setup:
* Chấp thuận cho app kết nối với FireBase Projects tải file goooleservices.json thêm vào app.
# Thêm /android/build.gradle
classpath 'com.google.gms:google-services:4.3.12' 
# /android/app/build.gradle
apply plugin: 'com.google.gms.google-services' 