package com.testmapdemo;

import android.content.res.Resources;
import android.util.DisplayMetrics;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.amap.api.location.AMapLocation;
import com.amap.api.location.AMapLocationListener;
import com.amap.api.maps.AMap;
import com.amap.api.maps.LocationSource;
import com.amap.api.maps.model.CameraPosition;
import com.facebook.react.uimanager.ThemedReactContext;


/**
 * Created by jianglin on 03/01/2018.
 */
public class ReactAMapView extends FrameLayout implements LocationSource, AMapLocationListener, AMap.OnCameraChangeListener {

    private ThemedReactContext CONTEXT;
    private ViewGroup.LayoutParams PARAM;

    public ReactAMapView(ThemedReactContext context) {
        super(context);
        this.CONTEXT = context;
        Resources resources = context.getCurrentActivity().getResources();
        DisplayMetrics dm = resources.getDisplayMetrics();
        PARAM = new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
    }

    @Override
    public void onLocationChanged(AMapLocation aMapLocation) {

    }

    @Override
    public void onCameraChange(CameraPosition cameraPosition) {

    }

    @Override
    public void onCameraChangeFinish(CameraPosition cameraPosition) {

    }

    @Override
    public void activate(OnLocationChangedListener onLocationChangedListener) {

    }

    @Override
    public void deactivate() {

    }

    @Override
    protected void onAttachedToWindow() {
        init();
        super.onAttachedToWindow();
    }

    private void init() {

    }
}
