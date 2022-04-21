# react-native-vector-icons
Chức năng: Sử dụng icon có sẵn.
Link: https://github.com/oblador/react-native-vector-icons
# Cài đặt Android: 
1. Bước 1: yarn add react-native-vector-icons
2. Bước 2: 
=> Thêm android/app/build.gradle
# apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
# project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] 
]
3. Bước 3: Thêm file react-native.config.js
module.exports = {
    dependencies: {
    },
    project: {
      ios: {},
      android: {}, // grouped into "project"
    },
    assets: ['./assets/fonts/', 'react-native-vector-icons'], // stays the same
  };
  Chạy lệnh: 
 # yarn react-native link
4. Bước 4: Cấu hình trong AppIcon.js
# Sử dụng:
https://oblador.github.io/react-native-vector-icons/

# IOS : Trong info.splist vào dòng 56:
Thêm :
<key>UIAppFonts</key>
<array>
<string>AntDesign.ttf</string>
<string>Entypo.ttf</string>
<string>EvilIcons.ttf</string>
<string>Feather.ttf</string>
<string>FontAwesome.ttf</string>
<string>FontAwesome5_Brands.ttf</string>
<string>FontAwesome5_Regular.ttf</string>
<string>FontAwesome5_Solid.ttf</string>
<string>Foundation.ttf</string>
<string>Ionicons.ttf</string>
<string>MaterialIcons.ttf</string>
<string>MaterialCommunityIcons.ttf</string>
<string>SimpleLineIcons.ttf</string>
<string>Octicons.ttf</string>
<string>Zocial.ttf</string>
<string>Fontisto.ttf</string>
</array>
# B2: cd ios, pod install.

# B3: chạy lệnh yarn react-native link
# B4: Vào Xcode phần auto link : Build Phases xóa tất cả link tay của pod đi không lỗi duplicate.
