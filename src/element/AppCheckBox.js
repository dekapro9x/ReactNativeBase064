import { ContextContainer } from "@context/AppContext";
import { blueGrey900, white } from "@css/Color";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import PropTypes from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { AppIcon } from "./AppIcon";
import { DebounceButton } from "./DebounceButton";

AppCheckbox.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleIconCheck: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  backgroundColor: PropTypes.string,
  isCheckbox: PropTypes.bool,
  onToggle: PropTypes.func,
  onPressLabel: PropTypes.func,
  id: PropTypes.any,
  dataReturn: PropTypes.any,
  labelComponent: PropTypes.any
};

export function AppCheckbox(props) {
  const { colorApp } = useContext(ContextContainer);
  const {
    containerStyle,
    idElementCheckbox,
    onpressCheckBox,
    isCheckbox,
    labelComponent,
    dataReturn,
    styleIconCheck,
    sizeIcon = SizeRpScreen.icon_size
  } = props;

  const [isChecked, setStateIsCheck] = useState(isCheckbox);

  useEffect(
    () => {
      setStateIsCheck(isCheckbox);
      return () => {};
    },
    [isCheckbox]
  );

  const handleOnPress = () => {
    setStateIsCheck(!isChecked);
    onpressCheckBox &&
      onpressCheckBox({ idElementCheckbox, dataReturn, isChecked: !isChecked });
  };

  return (
    <DebounceButton
      timeDelay={200}
      useDelay={true}
      useLoading={false}
      onPress={handleOnPress}
      style={{ ...styles.styleContainsDefault, ...containerStyle }}
    >
      <AppIcon
        style={[styleIconCheck]}
        name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"}
        type={"MaterialCommunityIcons"}
        sizeIcon={sizeIcon}
        color={isChecked ? blueGrey900 : colorApp.colorText}
      />
      {!!labelComponent && labelComponent}
    </DebounceButton>
  );
}

const styles = StyleSheet.create({
  styleContainsDefault: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: SizeRpScreen.width(50),
    backgroundColor: white
  }
});
