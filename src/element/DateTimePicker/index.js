import { isAndroid } from "@const/Setting";
import React from "react";
import DateTimePickerAndroid from "./DateTimePickerAndroid";
import DateTimePickerIOS from "./DateTimePickerIOS";

export function DateTimePickerOS(props) {
  if (isAndroid) {
    return (<DateTimePickerAndroid {...props} />)
  } else {
    return (
      <DateTimePickerIOS {...props} />
    )
  }
}
