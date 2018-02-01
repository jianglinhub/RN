package com.testmapdemo;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.util.Log;
import android.view.View;

import com.facebook.react.uimanager.PixelUtil;

/**
 * Created by jianglin on 03/01/2018.
 * 原生组件
 */

public class ReactCircleView extends View {
    private final String TAG = "CircleView";
    private Paint mPaint; // 画笔
    private float mRadius; // 圆半径

    public ReactCircleView(Context context) {
        super(context);
        mPaint = new Paint();
    }

    public void setColor(Integer color) {
        mPaint.setColor(color);
        invalidate();
    }

    public void setRadius(Integer radius) {
        mRadius = PixelUtil.toPixelFromDIP(radius);
        invalidate();
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        canvas.drawCircle(100, 100, 100, mPaint);
        Log.d(TAG, "绘图");
    }
}
