// package com.your-app-name; 
// Thay đổi thành package name của app.
package com.reactnativebase;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class CalendarModule extends ReactContextBaseJavaModule {
    //Khởi tạo class CalendarModule kế thừa từ ReactApplicationContext.
    CalendarModule(ReactApplicationContext context) {
       super(context);
    }
    //Gán tên để truy cập từ JS:

    @Override
        public String getName() {
    return "CalendarModule";
    }

    //Lấy tên của Class đem đi public để bên JS có thể truy cập đến:
    @ReactMethod
    public void createCalendarEvent(String name, String location) {
     Log.d("CalendarModule", "Create event called with name: " + name + " and location: " + location);
    }
    
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getString(){
    return "Call Native Module Success";
    }
}   