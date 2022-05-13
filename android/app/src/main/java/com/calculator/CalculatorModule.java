// package com.your-app-name; 
// Thay đổi thành package name của app.
package com.reactnativebase;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.provider.Settings.Secure;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class CalculatorModule extends ReactContextBaseJavaModule {
    //Khởi tạo class CalculatorModule kế thừa từ ReactApplicationContext.
    CalculatorModule(ReactApplicationContext context) {
       super(context);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getString(){
    return "Native Module Return Value Success";
    }

    //Gán tên để truy cập từ JS:
    @Override
        public String getName() {
    return "CalculatorModule";
    }
}   