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
