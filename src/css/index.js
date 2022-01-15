import { FontAppType } from "../const/TypeFontFamily";
const { blue900, white } = require("../const/Color");
const { SizeRpScreen } = require("../resources/ResponsiveScreen");

const heightInputOrTouchDefault = 50;

const AppLinearGradient = ["#481E34", "#16192B"]

const textAppDefault = SizeRpScreen.H5;

const titleAppTextInput = {
    fontSize: textAppDefault,
    color: white,
    marginLeft: 12
}
const appTextInputDefault = {
    flex: 1,
    height: heightInputOrTouchDefault,
    marginLeft: 16,
    fontWeight: "bold",
    fontSize: SizeRpScreen.H5,
}

const titleDebounceButtonDefault = {
    fontSize: 25,
    fontFamily: FontAppType.Happy,
    color: white
}

const debounceButtonDefault = {
    height: heightInputOrTouchDefault,
    width: SizeRpScreen.width(96),
    backgroundColor: blue900,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 12,
    marginTop: 12,
}

export {
    heightInputOrTouchDefault,
    textAppDefault,
    appTextInputDefault,
    titleAppTextInput,
    titleDebounceButtonDefault,
    debounceButtonDefault,
    AppLinearGradient
};