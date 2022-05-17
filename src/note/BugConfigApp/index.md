# 1 Could not find com.eightbitlab:blurview:1.6.3
https://github.com/Kureev/react-native-blur/issues/446
Fix: build.gradle
+ jcenter()
Lỗi làm cho máy ảo không thể cài được file APK từ Android Studio => Simulator


# 2 :  Invariant Violation: Calling synchronous methods on native modules is not supported in Chrome.

https://stackoverflow.com/questions/61067004/invariant-violation-calling-synchronous-methods-on-native-modules-is-not-suppor

Chạy lệnh: yarn patch-package react-native
Fix ver_0.67:
node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js
callNativeSyncHook(
    moduleID: number,
    methodID: number,
    params: any[],
    onFail: ?Function,
    onSucc: ?Function,
  ): any {
    const isDebuggingEnabled = (typeof atob !== 'undefined');
    this.processCallbacks(moduleID, methodID, params, onFail, onSucc);
    if(!isDebuggingEnabled)
    {
      return global.nativeCallSyncHook(moduleID, methodID, params);
    }
  }