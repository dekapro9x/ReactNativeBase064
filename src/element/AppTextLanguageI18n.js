import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { black } from "@css/Color";
import { FontAppType } from "../const/TypeFontFamily";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { connect } from 'react-redux';
import I18n, { getLanguages } from 'react-native-i18n';

const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;
  return {
    languageCurrent: LanguageReducer.language
  };
};

const AppTextLanguageI18nBase = (props) => {
  I18n.fallbacks = true;
  const { style, onPress, fontFamily, color, i18nKey, languageCurrent } = props;
  const [i18n, setStateI18n] = useState(I18n.translations[languageCurrent]);
  useEffect(() => {
    setStateI18n(I18n.translations[languageCurrent]);
  }, [languageCurrent])
  return (
    <Text
      {...props}
      style={[
        {
          fontSize: SizeRpScreen.H5,
          color: color || black,
          fontFamily: fontFamily || FontAppType.MotoyaLMaru
        },
        style
      ]}
      onPress={onPress}
    >
      {i18nKey && i18n[i18nKey]}
    </Text>
  );
};

const AppTextLanguageI18n = connect(mapStateToProps, null)(AppTextLanguageI18nBase);

export { AppTextLanguageI18n };

