package com.reactnativebase;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.provider.Settings.Secure;
import android.telephony.SmsManager;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class SentSmsModule extends ReactContextBaseJavaModule {
    SentSmsModule(ReactApplicationContext context) {
       super(context);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getString(){
    return "SentSmsModule Module Native";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String sentSms(String phone, String mess){
        Log.d("Sent SMS", "Gửi SMS đi..."+ phone + mess);
        SmsManager smsManager = SmsManager.getDefault();
        smsManager.sendTextMessage(phone, null, mess, null, null);
        return "Sent SMS";
    }

    @Override
    public String getName() {
    return "SentSmsModule";
    }
}   