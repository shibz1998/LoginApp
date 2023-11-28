package com.loginApp;
import android.util.Log;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }


    // add to CalendarModule.java
    @Override
    public String getName() {
        return "CalendarModule";
    }


    @ReactMethod
    public void createCalendarEvent(String name, String location, Callback successCallback, Callback errorCallback) {
//        Log.d("CalendarModule", "Create event called with name: " + name
//                + " and location: " + location);

        try {
            // Your synchronous logic here
            Log.d("CalendarModule", "Create event called with name: " + name + " and location: " + location);

            // If the operation is successful, invoke the success callback

            String logMessage = "Event created with name: " + name + " and location: " + location;
            Log.d("CalendarModule", logMessage);

            successCallback.invoke(logMessage);

//            successCallback.invoke("Event created successfully");
        } catch (Exception e) {
            // If there's an error, invoke the error callback
            errorCallback.invoke("Error creating event: " + e.getMessage());
        }



    }


}
