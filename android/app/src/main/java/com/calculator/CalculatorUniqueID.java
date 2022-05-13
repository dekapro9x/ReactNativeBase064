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

public class CalculatorUniqueID extends ReactContextBaseJavaModule {
    CalculatorUniqueID(ReactApplicationContext context) {
       super(context);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getString(){
    return "Calculator Unique ID";
    }

    @Override
        public String getName() {
    return "CalculatorUniqueID";
    }
}   