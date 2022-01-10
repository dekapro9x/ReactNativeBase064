Để cấu hình Font chữ:
# Bước 1: Tạo thư mục assets/fonts
# Bước 2: Download font chữ trên trang : https://www.dafont.com/baligle.font
# Bước 3:  react-native.config.js
Thêm :
module.exports = {
    dependencies: {
    //   'react-native-code-push': {
    //     platforms: {
    //       android: {
    //         sourceDir: '../node_modules/react-native-code-push/android/app',
    //       },
    //     },
    //   },
    },
    project: {
      ios: {},
      android: {}, // grouped into "project"
    },
    assets: ['./assets/fonts/', 'react-native-vector-icons'], // stays the same
  };
  # Bước 4: Chạy lệnh 
 + yarn react-native link 
 Auto config link vào file info.splist 
 + Build lại bằng Android Studio.
 Cách lấy mã font trong:
 + ios => info.splist:
 		<string>MotoyaLMaru.ttf</string>
		<string>Champagne.ttf</string>
		<string>KGHAPPY.ttf</string>
		<string>KGHAPPYShadows.ttf</string>
		<string>KGHAPPYSolid.ttf</string>
		<string>Letter Magic.ttf</string>
		<string>SUNRISE-ISLAND.ttf</string>
		<string>The Blacklight.ttf</string>