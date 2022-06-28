package com.reactnativebase;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class PDAModule extends ReactContextBaseJavaModule {
    PDAModule(ReactApplicationContext context) {
       super(context);
    }

    @Override
        public String getName() {
    return "PDAModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
     Log.d("PDAModule", "Create event called with name: " + name + " and location: " + location);
    }
    
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getString(){
    return "Call Native PDA Module Success";
    }
}   