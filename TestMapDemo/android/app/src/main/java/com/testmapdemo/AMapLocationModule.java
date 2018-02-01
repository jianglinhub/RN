package com.testmapdemo;

import android.util.Log;

import com.amap.api.location.AMapLocation;
import com.amap.api.location.AMapLocationClient;
import com.amap.api.location.AMapLocationClientOption;
import com.amap.api.location.AMapLocationListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

/**
 * Created by jianglin on 02/01/2018.
 */

public class AMapLocationModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext mReactApplicationContext;
    private AMapLocationClient mLocationClient = null;

    // 定位回调监听器
    private AMapLocationListener mAMaplocationListener = new AMapLocationListener() {
        @Override
        public void onLocationChanged(AMapLocation aMapLocation) {
            // 实例化一个回调给RN端的map对象
            WritableMap params = Arguments.createMap();
            if (aMapLocation != null) {
                if (aMapLocation.getErrorCode() == 0) {
                    // 定位成功
                    params.putString("address", aMapLocation.getAddress());
                } else {
                    // 定位失败
                    params.putBoolean("result", false);
                }
            }
            Log.d("asd", "address:" + params);
            // 发送给RN端
            sendEvent("onLocationChanged", params);
        }
    };

    private void sendEvent(String eventName, @Nullable WritableMap params) {
        if (mReactApplicationContext != null) {
            mReactApplicationContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(eventName, params);
        }
    }

    public AMapLocationModule(ReactApplicationContext reactContext) {
        super(reactContext);
        // 在构造函数中实例化定位功能的相关对象，并设置相关的定位配置，跟原生实现定位功能一样配置
        mReactApplicationContext = reactContext;
        mLocationClient = new AMapLocationClient(reactContext);
        mLocationClient.setLocationListener(mAMaplocationListener);
        AMapLocationClientOption clientOption = new AMapLocationClientOption();
        clientOption.setLocationMode(AMapLocationClientOption.AMapLocationMode.Battery_Saving);
        clientOption.setOnceLocation(true);
        mLocationClient.setLocationOption(clientOption);
    }

    @Override
    public String getName() {
        return "AMapLocation";
    }

    @ReactMethod
    public void destroy() {
        if (mLocationClient != null) {
            mLocationClient.stopLocation();
            mLocationClient.onDestroy();
        }
    }

    @ReactMethod
    public void startLocation() {
        if (mLocationClient != null) {
            Log.d("asd", "info in");
            mLocationClient.startLocation();
        }
    }

}
