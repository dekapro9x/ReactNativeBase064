import { isOSAndroid } from '@const/Setting';
import { Alert } from "react-native";
import Permissions, { openSettings, PERMISSIONS, RESULTS } from 'react-native-permissions';
const multipleCheckPermissionInit = async () => {
    const listPermissionAndroid = [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.READ_PHONE_NUMBERS];
    const listPermissionIOS = [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.READ_PHONE_NUMBERS];
    if (isOSAndroid) {
        let statusFullPermission = true;
        const checkPerAndroid = await Permissions.requestMultiple(listPermissionAndroid);
         listPermissionAndroid.forEach((permissions, index) => {
            if (checkPerAndroid[permissions] == RESULTS.GRANTED) {
                console.log("checkPerAndroid[permissions]", listPermissionAndroid[index] + ":", checkPerAndroid[permissions]);
            }
            if (checkPerAndroid[permissions] == RESULTS.DENIED) {
                statusFullPermission = false;
                console.log("checkPerAndroid[permissions]", listPermissionAndroid[index] + ":", checkPerAndroid[permissions]);
            }
        });
        reCallCheckPermission(statusFullPermission);
    } else {
        const checkPerIOS = await Permissions.requestMultiple(listPermissionIOS);
    }
}

const reCallCheckPermission = (statusFullPer) => {
    if (!statusFullPer) {
        Alert.alert("Cấp quyền truy cập", "Bạn chưa cấp quyền truy cập cho ứng dụng vui lòng cấp quyền đầy đủ trước khi sử dụng!",
            [{
                text: "Mở cài đặt", onPress: () => {
                    openSettings();
                }
            }], { cancelable: false });
    }
};

export { multipleCheckPermissionInit, reCallCheckPermission };
