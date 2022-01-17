import { ContextContainer } from "@context/AppContext";
import { blueGrey900, white } from "@css/Color";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { AppIcon } from "./AppIcon";
import { DebounceButton } from "./DebounceButton";

export function AppCheckbox(props) {
  const { colorApp } = useContext(ContextContainer);
  const {
    containerStyle,
    idElementCheckbox,
    isCheckbox,
    labelComponent,
    data,
    styleIconCheck,
    sizeIcon,
    onCheckBox
  } = props;
  const [isChecked, setStateIsCheck] = useState(isCheckbox);

  const handleOnPress = () => {
    setStateIsCheck(!isChecked);
    onCheckBox &&
      onCheckBox({ idElementCheckbox, data, isChecked: !isChecked });
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
        size={sizeIcon || SizeRpScreen.icon_size}
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

AppCheckbox.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleIconCheck: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  backgroundColor: PropTypes.string,
  isCheckbox: PropTypes.bool,
  onToggle: PropTypes.func,
  onPressLabel: PropTypes.func,
  id: PropTypes.any,
  data: PropTypes.any,
  labelComponent: PropTypes.any
};
