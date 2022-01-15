import { SizeRpScreen } from "@resources/ResponsiveScreen";
import { BEOTRAN_LOGGER } from "@util/Loger";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { appTextInputDefault, titleAppTextInput } from "src/css";
import { green400, grey900, red, white } from "../const/Color";
import { AppIcon } from "./AppIcon";

const AppTextInput = ({
  isCompulsory = false,
  secureTextEntry = false,
  titleTextInput = "Tiêu đề",
  useClean,
  styleContainer,
  styleInput,
  styleTitle,
  placeholder,
  onChangeText,
  defaultValue,
  autoCapitalize,
  onBlur,
  maxLength,
  keyboardType,
  onFocus,
  placeholderTextColor,
  keyState
}) => {

  const [isVisible, setIsVisible] = useState(secureTextEntry);
  const [valueInput, setStateValueInput] = useState("");

  const onPressEye = () => {
    setIsVisible(!isVisible);
  };

  const onChangeData = value => {
    setStateValueInput(value);
    onChangeText(keyState, value);
    BEOTRAN_LOGGER(keyState, value);
  };

  const cleanInput = () => {
    setStateValueInput("");
    onChangeText(keyState, "");
  }

  return (
    <View style={[styles.container, styleContainer]}>
      {titleTextInput ?
        <Text style={[styles.title, styleTitle]}>
          {titleTextInput} {isCompulsory && <Text style={[styles.title, styleTitle, { color: red, fontSize: SizeRpScreen.H5 * 1.2 }]}>*</Text>}
        </Text> : null}
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: white, borderRadius: 12 }}>
        <TextInput
          textContentType={"none"}
          keyboardType={keyboardType}
          secureTextEntry={isVisible}
          maxLength={maxLength}
          onChangeText={onChangeData}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onBlur={onBlur}
          autoCapitalize={autoCapitalize}
          onFocus={onFocus}
          style={[styles.inputDefault, styleInput]}
          value={valueInput}
          placeholderTextColor={placeholderTextColor || green400}
        >
        </TextInput>
        {useClean && !!valueInput &&
          <TouchableOpacity
            style={{
              width: 45,
              height: styleInput?.height || 48,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: styleContainer?.backgroundColor || white,
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12
            }}
            onPress={cleanInput}
          >
            <AppIcon
              type={"MaterialCommunityIcons"}
              name={"delete"}
              size={22}
              color={grey900}
            />
          </TouchableOpacity>}
        {secureTextEntry && !!valueInput &&
          <TouchableOpacity
            style={{
              width: 45,
              height: styleInput?.height || 48,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: styleContainer?.backgroundColor || white,
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12
            }}
            onPress={onPressEye}
          >
            <AppIcon
              type={"Entypo"}
              name={isVisible ? "eye" : "eye-with-line"}
              size={22}
              color={grey900}
            />
          </TouchableOpacity>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SizeRpScreen.width(100),
  },
  title: titleAppTextInput,
  inputDefault: appTextInputDefault

});
export { AppTextInput };

