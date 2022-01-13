import { AppLogo } from "../const/Setting";
import React, { useState } from "react";
import { Alert } from "react-native";
import { white, blue900 } from "../const/Color";
const ContextContainer = React.createContext();

const AppContext = props => {
  const [appData, setStateAppData] = useState({
    logoApp: AppLogo,
    colorApp: {
      backgroundColor: white,
      backgroundColorButton: blue900
    }
  });
  //Set cấu hình App:
  const setAppData = dataConfigNew => {
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
