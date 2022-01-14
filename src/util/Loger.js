import {Alert} from "react-native";
export function BEOTRAN_LOGGER(params) {
    console.log(
        '%c 🚀 ~ file: BEOTRAN, LOG PARAMS', 'color:red',params
    );
};

export function BEOTRAN_ALERT(title,value ){
    Alert.alert(`🚀 ~ file: BEOTRAN, ALERT PARAMS${title}`,value);
}