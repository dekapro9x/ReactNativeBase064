package com.bittee.modules;

import android.os.AsyncTask;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.symbol.emdk.EMDKManager;
import com.symbol.emdk.EMDKResults;
import com.symbol.emdk.barcode.BarcodeManager;
import com.symbol.emdk.barcode.ScanDataCollection;
import com.symbol.emdk.barcode.Scanner;
import com.symbol.emdk.barcode.ScannerException;
import com.symbol.emdk.barcode.ScannerResults;
import com.symbol.emdk.barcode.StatusData;

import java.util.ArrayList;

public class Zebra extends ReactContextBaseJavaModule implements EMDKManager.EMDKListener, Scanner.DataListener, Scanner.StatusListener {
    private ReactApplicationContext context;
    private boolean isZebraDevice;

    private Scanner scanner = null;
    private BarcodeManager barcodeManager = null;
    private EMDKManager emdkManager = null;

    public Zebra(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
        init();
    }

    @Override
    public String getName() {
        return "RNZebraModule";
    }

    public void init() {
        try {
            EMDKResults results = EMDKManager.getEMDKManager(context, this);
            if (results.statusCode == EMDKResults.STATUS_CODE.SUCCESS) {
                isZebraDevice = true;
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }
    }

    //EMDKListener
    @Override
    public void onOpened(EMDKManager emdkManager) {
        this.emdkManager = emdkManager;
        try {
            initializeScanner();
        } catch (ScannerException e) {
            e.printStackTrace();
        }
    }

    //EMDKListener
    @Override
    public void onClosed() {
        if (this.emdkManager != null) {
            this.emdkManager.release();
            this.emdkManager = null;
        }
    }

    private void initializeScanner() throws ScannerException {
        if (scanner == null) {
            barcodeManager = (BarcodeManager) this.emdkManager
                    .getInstance(EMDKManager.FEATURE_TYPE.BARCODE);

            scanner = barcodeManager.getDevice(BarcodeManager.DeviceIdentifier.DEFAULT);
            scanner.addDataListener(this);
            scanner.addStatusListener(this);
            scanner.triggerType = Scanner.TriggerType.HARD;
            scanner.enable();
            scanner.read();
        }
    }

    //DataListener
    @Override
    public void onData(ScanDataCollection scanDataCollection) {
        try {
            String statusStr = "";
            if (scanDataCollection != null && scanDataCollection.getResult() == ScannerResults.SUCCESS) {
                ArrayList<ScanDataCollection.ScanData> scanData = scanDataCollection.getScanData();
//                scanData.get(0).getLabelType();
//                scanData.get(0).getTimeStamp()
                statusStr = scanData.get(0).getData();

                WritableNativeMap params = new WritableNativeMap();
                params.putString("type", "data");
                params.putString("data", statusStr);
                context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("onBarcodeReceive", params);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    //StatusListener
    @Override
    public void onStatus(StatusData statusData) {
        new AsyncStatusUpdate().execute(statusData);
    }

    private class AsyncStatusUpdate extends AsyncTask<StatusData, Void, String> {
        @Override
        protected String doInBackground(StatusData... params) {
            String statusStr = "";
            StatusData statusData = params[0];
            StatusData.ScannerStates state = statusData.getState();
            // Different states of Scanner
            switch (state) {
                // Scanner is IDLE
                case IDLE:
                    statusStr = "The scanner enabled and its idle";
                    try {
                        scanner.read();
                    } catch (ScannerException e) {
                    }
                    break;
                case SCANNING:
                    statusStr = "Scanning..";
                    break;
                case WAITING:
                    statusStr = "Wai/ting for trigger press..";
                    break;
                case DISABLED:
                    statusStr = "Scanner is not enabled";
                    break;
                default:
                    break;
            }
            return statusStr;
        }

        @Override
        protected void onPostExecute(String result) {
//            statusView.setText(result);
        }
    }
}
