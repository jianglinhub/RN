package com.testmapdemo;

import android.util.Log;

import com.amap.api.maps.AMap;
import com.amap.api.maps.MapView;
import com.amap.api.maps.model.LatLng;
import com.amap.api.maps.model.MarkerOptions;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;

/**
 * Created by jianglin on 03/01/2018.
 */

public class ReactAMapManager extends SimpleViewManager<ReactAMapView> {

    public static final String REACT_CLASS = "AMapView";
    private ReactAMapView mapView;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected ReactAMapView createViewInstance(ThemedReactContext reactContext) {
        Log.d("AMap", "in");
        mapView = new ReactAMapView(reactContext);
        mapView.onCreate(null);
        mapView.onResume();
        return mapView;
    }

//    @ReactPropGroup(names = {"lat", "lng", "title"})
//    public void drawMarker(MapView mapView, double lat, double lng, String title) {
//        Log.d("AMap", "in");
//        AMap aMap = mapView.getMap();
//        MarkerOptions options = new MarkerOptions();
//        options.position(new LatLng(lat, lng));
//        options.title(title);
//        aMap.addMarker(options);
//    }
}
