package com.bittee.modules;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import org.json.JSONException;
import org.json.JSONObject;

public class UsbModule extends ReactContextBaseJavaModule {
    public class BarcodeBroadcastReceiver extends BroadcastReceiver {
        ReactApplicationContext jscontext;

        public BarcodeBroadcastReceiver(ReactApplicationContext jscontext) {
            this.jscontext = jscontext;
        }

        @Override
        public void onReceive(Context context, Intent intent) {
            try {
                String barcode = intent.getStringExtra("barcode");
                WritableNativeMap params = new WritableNativeMap();
                params.putString("type", "data");
                params.putString("data", barcode);
                jscontext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit("onBarcodeReceive", params);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    ReactApplicationContext jsModulecontext;

    public UsbModule(ReactApplicationContext reactContext) {
        super(reactContext);
        jsModulecontext = reactContext;
        Util.initSoundPool(reactContext);
        BarcodeBroadcastReceiver receiver = new BarcodeBroadcastReceiver(reactContext);
        IntentFilter filter = new IntentFilter("com.bittee.blescanner.BARCODE_NOTIFICATION");
        reactContext.registerReceiver(receiver, filter);
    }

    @Override
    public String getName() {
        return "RNUsbModule";
    }

    @ReactMethod
    public void getUsbConnection(Promise p) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("State", 1);
            jsonObject.put("DeviceID", 1);
            jsonObject.put("Manu", "PDA");
        } catch (JSONException e) {
            e.printStackTrace();
        }

        p.resolve(jsonObject.toString());
    }

    public static class DataConnect {
        public int connectState;
        public int DeviceID;
        public String Manu;

        public DataConnect(int connectState, int deviceID, String Manu) {
            this.connectState = connectState;
            DeviceID = deviceID;
            this.Manu = Manu;
        }
    }

    @ReactMethod
    public void playBeep(Promise p) {
        Util.play(1, 0);
    }

    @ReactMethod
    public void testPushData(String testData, Promise p) {
        WritableNativeMap params = new WritableNativeMap();
        params.putString("type", "data");
        params.putString("data", testData);
        jsModulecontext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("onBarcodeReceive", params);
    }
}