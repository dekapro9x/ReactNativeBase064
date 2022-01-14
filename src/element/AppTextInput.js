import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { green400, grey900, white } from "../const/Color";
import { AppIcon } from "./AppIcon";

const AppTextInput = ({
  useClean,
  styleContainer,
  styleInput,
  titleTextInput = "Tiêu đề",
  placeholder,
  onChangeText,
  defaultValue,
  autoCapitalize,
  onBlur,
  maxLength,
  keyboardType,
  onFocus,
  secureTextEntry = false,
  placeholderTextColor,
  keyState
}) => {
  
  const [isVisible, setIsVisible] = useState(secureTextEntry);
  const [valueInput,setStateValueInput] = useState("");

  const onPressEye = () => {
    setIsVisible(!isVisible);
  };

  const onChangeData = value => {
    setStateValueInput(value);
    onChangeText(keyState,value);
  };

  const cleanInput = ()=>{
    setStateValueInput("");
    onChangeText(keyState,"");
  }

  return (
    <View style={[styles.container, styleContainer]}>
    {titleTextInput?<Text style={styles.title}>{titleTextInput}</Text> :null}
    <View style={{flexDirection:"row", alignItems: "center", backgroundColor:white, borderRadius:12}}>
      <TextInput
        textContentType={"none"}
        keyboardType={keyboardType }
        secureTextEntry={isVisible}
        maxLength={maxLength}
        onChangeText={onChangeData}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onBlur={onBlur}
        autoCapitalize={autoCapitalize}
        onFocus={onFocus}
        style={[styles.inputDefault,styleInput]}
        value= {valueInput}
        placeholderTextColor = {placeholderTextColor|| green400}
      >
      </TextInput>
      {useClean && !!valueInput &&
        <TouchableOpacity
        style={{
        width:45,
        height:styleInput?.height|| 48,
        alignItems: "center", 
        justifyContent:"center", 
        backgroundColor:styleContainer?.backgroundColor||white,
        borderTopRightRadius:12,
        borderBottomRightRadius:12
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
      {secureTextEntry &&
        <TouchableOpacity
        style={{
        width:45,
        height:styleInput?.height|| 48,
        alignItems: "center", 
        justifyContent:"center", 
        backgroundColor:styleContainer?.backgroundColor||white,
        borderTopRightRadius:12,
        borderBottomRightRadius:12
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
    width:SizeRpScreen.width(100),
  },
  title:{
    fontSize:SizeRpScreen.H5,
    color:white,
    marginLeft:12
  },
  inputDefault:{
    flex:1,
    marginLeft:16,
    borderColor: "rgba(112,112,112,0.5)",
    fontWeight: "bold",
    height: 48,
    fontSize:SizeRpScreen.H5,
  }

});
export { AppTextInput };

