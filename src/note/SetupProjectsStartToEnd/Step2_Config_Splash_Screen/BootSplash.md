react-native-bootsplash
Link: https://github.com/zoontek/react-native-bootsplash
+ Bước 1: yarn add react-native-bootsplash
+ Bước 2: Tạo folder assets cùng tầng src => thêm 1 ảnh nền splash vào đó.
# Cấu hình Android:

# MainActivity.java:
+ import android.os.Bundle;
+ import com.zoontek.rnbootsplash.RNBootSplash; 
+ return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected void loadApp(String appKey) {
        RNBootSplash.init(MainActivity.this); // <- initialize the splash screen
        super.loadApp(appKey);
      }
    };

# android/app/src/main/res/values/styles.xml
  <!-- Thêm dòng này để cấu hình ảnh splash -->
    <style name="BootTheme" parent="Theme.SplashScreen">
        <item name="windowSplashScreenBackground">@color/bootsplash_background</item>
        <item name="windowSplashScreenAnimatedIcon">@mipmap/bootsplash_logo</item>
        <item name="postSplashScreenTheme">@style/AppTheme</item>
    </style>

# Trong AndroidManifest.xml:
+ android:theme="@style/BootTheme"
+ android:exported="true"

# Trong android\app\src\main\res: 
+ Thêm folder layout
+ Thêm folder drawable
+ Bước 3: Chạy lệnh gen ảnh:
# Kiểm tra phần ảnh được active Android ứng với cấu hình không?
+ android:src="@mipmap/bootsplash_logo"

Chạy lệnh:
# yarn react-native generate-bootsplash <res/BootSplash.png> 
+ yarn react-native generate-bootsplash assets/BootSplash.png

Run terminal hiển thị: yarn run v1.22.4\$ /Users/\_coz/Projects/rn_config_base/rn_config_base/node_modules/.bin/generate-bootsplash:
✔ The path to the root of your React Native project … ./
✔ The path to your static assets directory … assets
✔ Your original icon file … assets/bootsplash_logo.jpg
✔ The bootsplash background color (in hexadecimal) … #FFFFFF
✔ The desired icon width (in dp - we recommend approximately ~100) … 300
✔ Are you sure? All the existing bootsplash images will be overwritten! … yes

# Cấu hình IOS: ios/AppDelegate.m