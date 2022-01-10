import React, { useState } from "react";
import { white } from "../const/Color";
const ContextContainer = React.createContext();

const AppContext = props => {
  const [appData, setStateAppData] = useState({
    colorApp: {
      backgroundColor: white
    }
  });
  //Set cấu hình App:
  const setAppData = dataConfigNew => {
    const dataConfigAppUpdate = redefinedDataForApp(dataConfigNew);
    setStateAppData(dataConfigAppUpdate);
  };
  //Định nghĩa cấu trúc mới:
  const redefinedDataForApp = dataConfigNew => {
    const { backgroundColor } = dataConfigNew;
    return {
      colorApp: {
        backgroundColor: backgroundColor || white
      }
    };
  };
  return (
    <ContextContainer.Provider value={{ ...appData, setAppData }}>
      {props.children}
    </ContextContainer.Provider>
  );
};
export { AppContext, ContextContainer };
