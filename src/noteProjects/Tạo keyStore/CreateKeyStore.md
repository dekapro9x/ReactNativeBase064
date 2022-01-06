Tạo keystore : https://reactnative.dev/docs/signed-apk-android cd android/app.
Cấu hình biến Path môi trường sinh khóa key:
# set PATH=C:\Program Files\Java\jdk1.8.0_301\bin
 keytool -genkey -v -keystore mykeystore.keystore -alias mykeyalias -keyalg RSA -keysize 2048 -validity 10000 
 đổi thành
  keytool -genkey -v -keystore keyStoreRnBase.keystore -alias ReactNativeBase -keyalg RSA -keysize 2048 -validity 10000 
 # Lưu ý : Tạo keyStore tại C:\Program Files\Java\jdk1.8.0_301\bin
  Enter keystore password: xuannam12 
  Re-enter new password : xuannam12 
  What is your first and last name? xuannam 
  What is the name of your organizational unit? company 
  What is the name of your organization? rabiloo 
  What is the name of your City or Locality? HaNoi 
  What is the name of your State or Province? HaNoi 
  What is the two-letter country code for this unit? VN 
  Is CN=xuannam, OU=company, O=rabiloo, L=HaNoi, ST=HaNoi, C=VN correct? Y

Vào build.gradle Thay signingConfigs { debug { storeFile file('debug.keystore') storePassword 'android' keyAlias 'androiddebugkey' keyPassword 'android' } }

Thành:
   signingConfigs {
      debug {
        storeFile file(MYAPP_RELEASE_STORE_FILE)
        storePassword MYAPP_RELEASE_STORE_PASSWORD
        keyAlias MYAPP_RELEASE_KEY_ALIAS
        keyPassword MYAPP_RELEASE_KEY_PASSWORD
    }
    release {
        storeFile file(MYAPP_RELEASE_STORE_FILE)
        storePassword MYAPP_RELEASE_STORE_PASSWORD
        keyAlias MYAPP_RELEASE_KEY_ALIAS
        keyPassword MYAPP_RELEASE_KEY_PASSWORD
    }
}
Vào : gradle.properties

MYAPP_RELEASE_STORE_FILE=mykeystore.keystore MYAPP_RELEASE_KEY_ALIAS=mykeyalias MYAPP_RELEASE_STORE_PASSWORD=* MYAPP_RELEASE_KEY_PASSWORD=*

Đổi thành :

MYAPP_RELEASE_STORE_FILE=rn_config_base.keystore MYAPP_RELEASE_KEY_ALIAS=rn_config_base MYAPP_RELEASE_STORE_PASSWORD=xuannam12 MYAPP_RELEASE_KEY_PASSWORD=xuannam12