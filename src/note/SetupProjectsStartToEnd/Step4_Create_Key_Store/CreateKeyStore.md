1. Bước 1: Cấu hình biến Path môi trường sinh khóa key.
# set PATH=C:\Program Files\Java\jdk1.8.0_301\bin
Yêu cầu: Phải cấu hình biến môi trường này để chạy Cmd trong thư mục jdk1.8.0_301\bin mới sinh ra được file .keystore
keytool -genkey -v -keystore mykeystore.keystore -alias mykeyalias -keyalg RSA -keysize 2048 -validity 10000 
Tạo keystore : https://reactnative.dev/docs/signed-apk-android cd android/app.

2. Bước 2: 
#  (Chạy quyền ADMIN)
+ cmd Admin =>  cd C:\Program Files\Java\jdk1.8.0_301\bin 
# keytool -genkey -v -keystore keyStoreRnBase.keystore -alias ReactNativeBase -keyalg RSA -keysize 2048 -validity 10000
# Lưu ý : Tạo keyStore tại C:\Program Files\Java\jdk1.8.0_301\bin
  Enter keystore password: xuannam12 
  Re-enter new password : xuannam12 
 What is your first and last name?
  [Unknown]:  xuannam
What is the name of your organizational unit?
  [Unknown]:  company
What is the name of your organization?
  [Unknown]:  247express
What is the name of your City or Locality?
  [Unknown]:  HaNoi
What is the name of your State or Province?
  [Unknown]:  HaNoi
What is the two-letter country code for this unit?
  [Unknown]:  VN
Is CN=xuannam, OU=express, O=247express, L=HaNoi, ST=HaNoi, C=VN correct?
  [no]:  Y

3. Bước 3: Vào build.gradle.
Thêm:
   signingConfigs {
   ...
    release {
        storeFile file(MYAPP_RELEASE_STORE_FILE)
        storePassword MYAPP_RELEASE_STORE_PASSWORD
        keyAlias MYAPP_RELEASE_KEY_ALIAS
        keyPassword MYAPP_RELEASE_KEY_PASSWORD
    }

4. Bước 4: Thêm vào gradle.properties.
MYAPP_RELEASE_STORE_FILE=keyStoreRnBase.keystore
MYAPP_RELEASE_KEY_ALIAS=ReactNativeBase 
MYAPP_RELEASE_STORE_PASSWORD=xuannam12 
MYAPP_RELEASE_KEY_PASSWORD=xuannam12