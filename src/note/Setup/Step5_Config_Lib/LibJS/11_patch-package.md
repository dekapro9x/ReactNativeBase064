# react-native-responsive-screen
Chức năng: Vá các thư viện theo version mới nhất tránh sửa trực tiếp trong node module.
Link: https://www.npmjs.com/package/patch-package
# Cài đặt: 
1. Bước 1: yarn add patch-package postinstall-postinstall
2. Bước 2: 
In package.json
 "scripts": {
+  "postinstall": "patch-package"
 }
# Sử dụng:
yarn patch-package package-name