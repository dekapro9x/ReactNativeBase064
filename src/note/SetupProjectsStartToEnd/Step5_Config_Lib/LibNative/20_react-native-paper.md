# react-native-media-controls
Chức năng: Tạo các element có sẵn có thể dùng, thay thế appContext custom theme...
Link: https://callstack.github.io/react-native-paper/getting-started.html
# Cài đặt: 
Bước 1:
yarn add react-native-paper
Bước 2: babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};