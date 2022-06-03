import React, { useState, createContext } from "react";
import { Alert } from "react-native";
import { black, blue900 } from "@css/Color";
import { AppLogo, } from "../const/Setting";
import { AppLinearGradient } from "@css/";
const ContextContainer = createContext();

const AppContext = props => {
  const [appData, setStateAppData] = useState({
    logoApp: AppLogo,
    linearGradientApp: AppLinearGradient,
    colorApp: {
      backgroundColor: black,
      backgroundColorButton: blue900,
      colorText: black
    }
  });

  //Set cấu hình App:
  const setAppData = (dataConfigNew) => {
    if (validateStructDataConfig(dataConfigNew)) {
      setStateAppData(dataConfigNew);
    } else {
      Alert.alert("Cấu trúc dữ liệu cấu hình App lỗi! Vui lòng thử lại sau!");
    }
  };

  //Định nghĩa cấu trúc mới:
  const validateStructDataConfig = dataConfig => {
    return true;
  };
  
  return (
    <ContextContainer.Provider value={{ ...appData, setAppData, appData }}>
      {props.children}
    </ContextContainer.Provider>
  );
};
export { AppContext, ContextContainer };

