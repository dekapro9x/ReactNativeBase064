package com.reactnativebase;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.zoontek.rnbootsplash.RNBootSplash; 
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() {
    return "ReactNativeBase";
  }
  //Thêm dòng này để cấu hình React -navigation screen
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  //Thêm dòng này để cấu hình ảnh splash:
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected void loadApp(String appKey) {
        RNBootSplash.init(MainActivity.this); // <- initialize the splash screen
        super.loadApp(appKey);
      }
    };
  }
}
