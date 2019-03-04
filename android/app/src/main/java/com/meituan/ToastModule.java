package com.meituan;

import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JavaScriptModuleRegistry;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.views.picker.ReactPicker;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * -----------作者----------日期----------变更内容-----
 * -          刘泽      2019-03-04       创建class
 */
public class ToastModule extends ReactContextBaseJavaModule {


    private static final String MESSAGE = "MESSAGE";

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        HashMap<String, Object> stringObjectHashMap = new HashMap<>();
        stringObjectHashMap.put(MESSAGE, "刘泽===============");
        return stringObjectHashMap;
    }

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ToastForAndroid";
    }

    @ReactMethod
    private void show(String des) {
        Toast.makeText(getReactApplicationContext(), des, Toast.LENGTH_SHORT).show();

    }

    @ReactMethod
    private void getCallback(Callback callback) {
        callback.invoke("回调方式获取数据");

    }

    @ReactMethod
    private void getPromise(Promise promise) {
        if (true) {
            promise.resolve("promise 回调成功");
        } else {
            promise.reject("promise 回调失败");
        }

    }

    @ReactMethod
    private void transferJs() {
        WritableMap writableMap = Arguments.createMap();
        writableMap.putString("eventname", "刘泽");
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("eventname", writableMap);
    }
}
