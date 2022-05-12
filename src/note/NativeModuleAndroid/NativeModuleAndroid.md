# Bản chất Native Module Android :
Với ứng dụng viết bằng React Native thì đôi khi cần giao tiếp xuống tầng dưới native của hệ điều hành vì vậy cần không thể dùng JS để gọi đến được.
Tuy nhiên nếu sử dụng 1 số lib bằng ngôn ngữ như C++, Kotlin,Java thì có thể xử lý dc vấn đề này.
=> Cần sinh ra 1 thư để có thể gọi xuống tầng native đó là Native Module.
Cho phép giao tiếp bất kì thứ gì với JS.


# Cách tạo Native Module có thể dùng 2 ngôn ngữ là Java hoặc Kotlin.
+ Java : file.java
+ Kotlin : file.kt


VD demo: 
Viết Native Android gọi đến Calendar Android: 
# Bước 1: Trong android/app/src/main/java/com tạo ra 1 thư mục calendarmodule
# Bước 2: Tạo file CalendarModule.java
# Bước 3: Viết nội dung và hiểu cơ chế code.

package com.reactnativebase; 
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CalendarModule extends ReactContextBaseJavaModule {
   CalendarModule(ReactApplicationContext context) {
       super(context);
   }
}

=> Bản chất là tạo ra 1 class tên là CalendarModule được kế thừa từ thằng bridge.ReactContextBaseJavaModule và nó làm nhiệm vụ thực hiện các yêu cầu từ JS.
Phần mở rộng này chỉ thực hiện các UI BaseJavaModule  

# Bước 4 : Gán tên native module đại diện để có thể gọi đến. Tất cả Native Module đều có 1 tên đại diện và được khai báo bằng phương thức getName().
Phương thức này trả về 1 cái tên mà có thể dùng JS truy cập đến VD như :

@Override
public String getName() {
   return "CalendarModule";
}

Cách truy cập đến native module "CalendarModule" trong JS:
const { CalendarModule } = ReactNative.NativeModules;

# Bước 5: Khai báo Native Module tới JS 
Tiếp theo cần phải thêm native module để có thể gọi được từ JS phải dùng đến @ReactMethod

VD : Tạo ra 1 createCalendarEvent() của CalendarModule sẽ lấy tên của public String getName() {
   return "CalendarModule";
} để thực hiện truy cập.

# Bước 6: Đăng kí Native Module đã được viết với React Native: Tạo file MyAppPackage.java
Xử dụng phương thức createNativeModules() trên ReactPackage để có danh sách Native Module đã đăng kí và viết.

Thông thường Native Module sẽ có 2 file: 
+ Module để khai báo tên Native Module và public tên Native Module sẽ được truy cập đến.
+ Package để khai báo danh sách đăng kí Native Module.

package com.reactnativebase; 
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyAppPackage implements ReactPackage {

   @Override
   public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
       return Collections.emptyList();
   }

   @Override
   public List<NativeModule> createNativeModules(
           ReactApplicationContext reactContext) {
       List<NativeModule> modules = new ArrayList<>();
       modules.add(new CalendarModule(reactContext));
       return modules;
   }
}

=> Lưu ý mỗi Native Module viết sẽ có 1 Module + Package đi kèm.


+ Package trả về getName()

# Bước 7: import vào MainApplication.java. 
import com.calendarmodule.CalendarPackage;
@Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          //Thêm danh sách Native Module:
          packages.add(new CalendarPackage());
          return packages;
        }

