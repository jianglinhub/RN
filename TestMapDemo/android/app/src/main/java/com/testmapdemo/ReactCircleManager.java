package com.testmapdemo;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by jianglin on 03/01/2018.
 * 原生组件管理器，实现js和java的信息传递
 */

public class ReactCircleManager extends SimpleViewManager<ReactCircleView> {

    public static final String REACT_CLASS = "MCircle";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected ReactCircleView createViewInstance(ThemedReactContext reactContext) {
        return new ReactCircleView(reactContext);
    }

    @ReactProp(name = "color")
    public void setColor(ReactCircleView view, Integer color) {
        view.setColor(color);
    }

    @ReactProp(name = "radius")
    public void setRadius(ReactCircleView view, Integer radius) {
        view.setRadius(radius);
    }
}
