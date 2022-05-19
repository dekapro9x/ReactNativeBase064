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
//Lib native:
import android.telephony.TelephonyManager;
import android.content.Context;
import android.content.Intent;  
import android.app.Activity;  
import android.net.Uri;  

public class SentSmsModule extends ReactContextBaseJavaModule {
    SentSmsModule(ReactApplicationContext context) {
       super(context);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getString(){
    return "SentSmsModule Module Native";
    }

    @ReactMethod
    public String getCurrentNumberPhone(){
      String phoneNumber = "0962294434";
//    TelephonyManager telephonyManager = (TelephonyManager) SentSmsModule.getSystemService(Context.TELEPHONY_SERVICE);
//    String phoneNumber = telephonyManager.getLine1Number();
    return phoneNumber;
    }

    @ReactMethod
    public  void  callPhoneNumber(String phoneNumber){
        // Intent callIntent = new Intent(Intent.ACTION_CALL); 
        //  callIntent.setData(Uri.parse("tel:"+ phoneNumber)); 
        //  Context.startActivity(callIntent);   
        Intent callIntent = new Intent(Intent.ACTION_CALL);
        callIntent.setData(Uri.parse("tel:phoneNumber"));
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