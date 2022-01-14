import { Alert } from "react-native";

export function BEOTRAN_LOGGER(param1, param2, param3, param4, param5) {
  param1 &&
    console.log("%c 🚀🚀🚀~ file: BEOTRAN, LOG PARAMS_1", "color:red", param1);
  param2 &&
    console.log("%c 🚀🚀🚀 ~ file: BEOTRAN, LOG PARAMS_2", "color:blue", param2);
  param3 &&
    console.log("%c 🚀🚀🚀 ~ file: BEOTRAN, LOG PARAMS_3", "color:green", param3);
  param4 &&
    console.log("%c 🚀🚀🚀 ~ file: BEOTRAN, LOG PARAMS_4", "color:orage", param4);
  param5 &&
    console.log("%c 🚀🚀🚀 ~ file: BEOTRAN, LOG PARAMS_5", "color:pink", param5);
}

export function BEOTRAN_ALERT(title, value) {
  Alert.alert(`🚀 ~ file: BEOTRAN, ALERT PARAMS${title}`, value);
}
