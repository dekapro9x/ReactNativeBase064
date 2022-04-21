import {
    check,
    request,
    PERMISSIONS,
    RESULTS,
    openSettings,
  } from 'react-native-permissions';
  import {Alert} from 'react-native';
import { isIOS } from '@const/Setting';
  //IOS có 2 quyền location cần check riêng biệt:
  //Luôn cho phép khi xử dụng App.
  //Chỉ cho phép khi đang dùng App.
  //Kiểm tra quyền vị trí:
  const checkPermissionsLocationPlatform = async () => {
    let checkPermissionAlays = '';
    let checkPermissionInUseApp = '';
    if (isIOS) {
      checkPermissionAlays = await checkPermissionLocationAlwayIOS();
      checkPermissionInUseApp = await checkPermissionLocationInUseAppIOS();
      if (
        checkPermissionAlays == 'granted' &&
        checkPermissionInUseApp == 'granted'
      ) {
        return 'GRANTED';
      } else {
        return requestPermissionLocationIOS();
      }
    } else {
      let checkPermissionLocation = '';
      let checkPermissionLocationBackground = '';
      checkPermissionLocation = await checkPermissionLocationAndroid();
      checkPermissionLocationBackground = await checkPermissionLocationBackgroundAndroid();
      if (checkPermissionLocation == 'granted') {
        return 'GRANTED';
      } else {
      }
    }
  };
  
  //Kiểm tra quyền vị trí luôn cho phép IOS.
  const checkPermissionLocationAlwayIOS = async () => {
    let checkAlwayLocationIOS = '';
    await check(PERMISSIONS.IOS.LOCATION_ALWAYS)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            checkAlwayLocationIOS = 'unavailable';
            break;
          case RESULTS.DENIED:
            checkAlwayLocationIOS = 'denied';
            break;
          case RESULTS.GRANTED:
            checkAlwayLocationIOS = 'granted';
            break;
          case RESULTS.BLOCKED:
            checkAlwayLocationIOS = 'blocked';
            break;
        }
      })
      .catch((error) => {});
    return checkAlwayLocationIOS;
  };
  
  //Kiểm tra quyền vị trí khi đang dùng App IOS:
  const checkPermissionLocationInUseAppIOS = async () => {
    let checkUseInAppLocationIOS = '';
    await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            checkUseInAppLocationIOS = 'unavailable';
            break;
          case RESULTS.DENIED:
            checkUseInAppLocationIOS = 'denied';
            break;
          case RESULTS.GRANTED:
            checkUseInAppLocationIOS = 'granted';
            break;
          case RESULTS.BLOCKED:
            checkUseInAppLocationIOS = 'blocked';
            break;
        }
      })
      .catch((error) => {});
    return checkUseInAppLocationIOS;
  };
  
  //Thực hiện request hỏi quền truy cập vị trí ứng dụng:
  const requestPermissionLocationIOS = async () => {
    let requestPermissionAlaysIOS = false;
    let requestPermissionInUseAppIOS = false;
    await request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((event) => {
      if (event === 'granted') {
        requestPermissionAlaysIOS = true;
        if (event === 'blocked') {
          requestPermissionAlaysIOS = false;
        }
      }
    });
    await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((event) => {
      if (event == 'granted') {
        requestPermissionInUseAppIOS = true;
      } else {
        requestPermissionInUseAppIOS = false;
      }
    });
    if (!requestPermissionAlaysIOS && !requestPermissionInUseAppIOS) {
      alertPermissionsLocation();
    } else {
      return 'GRANTED';
    }
  };
  
  //Thông báo bật quyền vị trí trong Setting:
  const alertPermissionsLocation = () => {
    Alert.alert(
      'Yêu cầu cấp quyền vị trí!',
      'Vui lòng cấp quyền vị trí để xử dụng tính năng này.',
      [
        {
          text: 'Mở Setting',
          onPress: () => {},
        },
        {
          text: 'OK',
          onPress: () => openSettings(),
        },
      ],
      {cancelable: false},
    );
  };
  
  //Android:
  const checkPermissionLocationAndroid = async () => {
    let checked = '';
    await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      .then((result) => {
        switch (result) {
          case RESULTS.BLOCKED:
            checked = RESULTS.BLOCKED;
            alertPermissionsLocation();
            break;
          case RESULTS.UNAVAILABLE:
            checked = RESULTS.UNAVAILABLE;
            requestLocation();
            break;
          case RESULTS.DENIED:
            checked = RESULTS.DENIED;
            requestLocation();
            break;
          case RESULTS.LIMITED:
            checked = RESULTS.LIMITED;
            break;
          case RESULTS.GRANTED:
            checked = RESULTS.GRANTED;
            break;
        }
      })
      .catch((error) => {
        // …
      });
    return checked;
  };
  
  //Kiểm tra quyền vị trí background:
  const checkPermissionLocationBackgroundAndroid = async () => {
    let checkPermission = '';
    await check(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION)
      .then((result) => {
        switch (result) {
          case RESULTS.BLOCKED:
            checkPermission = RESULTS.BLOCKED;
            alertPermissionsLocation();
            break;
          case RESULTS.UNAVAILABLE:
            checkPermission = RESULTS.UNAVAILABLE;
            alertPermissionsLocation();
            break;
          case RESULTS.DENIED:
            checkPermission = RESULTS.DENIED;
            requestLocationBackground();
            break;
          case RESULTS.LIMITED:
            checkPermission = RESULTS.LIMITED;
            requestLocationBackground();
            break;
          case RESULTS.GRANTED:
            checkPermission = RESULTS.GRANTED;
            break;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return checkPermission;
  };
  
  //Thực hiện request xin quyền vị trí:
  const requestLocation = () => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
      switch (result) {
        case RESULTS.BLOCKED:
          checkPermission = RESULTS.BLOCKED;
          alertPermissionsLocation();
          break;
        case RESULTS.UNAVAILABLE:
          checkPermission = RESULTS.UNAVAILABLE;
          alertPermissionsLocation();
          break;
        case RESULTS.DENIED:
          checkPermission = RESULTS.DENIED;
          alertPermissionsLocation();
          break;
        case RESULTS.LIMITED:
          checkPermission = RESULTS.LIMITED;
          requestLocationBackground();
          break;
        case RESULTS.GRANTED:
          requestLocationBackground();
          break;
      }
    });
  };
  
  //Thực hiện request xin quyền vị trí background:
  const requestLocationBackground = () => {
    request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION).then((result) => {
      switch (result) {
        case RESULTS.BLOCKED:
          checkPermission = RESULTS.BLOCKED;
          break;
        case RESULTS.UNAVAILABLE:
          checkPermission = RESULTS.UNAVAILABLE;
          break;
        case RESULTS.DENIED:
          checkPermission = RESULTS.DENIED;
          break;
        case RESULTS.LIMITED:
          checkPermission = RESULTS.LIMITED;
          break;
        case RESULTS.GRANTED:
          break;
      }
    });
  };
  
  export {checkPermissionsLocationPlatform};