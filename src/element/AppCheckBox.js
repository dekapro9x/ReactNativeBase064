import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Color, Dimension } from '../commons/constants';
import IconView, { IconViewType } from './IconView';
import TouchableOpacityEx from './TouchableOpacityEx';

export default function Checkbox(props) {
  const {
    id,
    isCheck,
    label,
    data,
    style,
    styleIconCheck,
    sizeIcon,
    styleLabel,
    onToggle,
    onPressLabel,
  } = props;
  const [isChecked, setIsCheck] = useState(isCheck);
  const handleOnPress = () => {
    onToggle && onToggle({id, data, isChecked: !isChecked});
    setIsCheck(!isChecked);
  };
  const handleOnPressLabel = () => {
    onPressLabel ? onPressLabel({id, data, isChecked}) : handleOnPress();
  };

  return (
    <TouchableOpacityEx
      onPress={handleOnPress}
      style={{...styles.styleContains, ...style}}>
      <IconView
        onPress={handleOnPress}
        style={{...styles.stIconCheck, ...styleIconCheck}}
        name={isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'}
        type={IconViewType.MaterialCommunityIcons}
        size={sizeIcon || Dimension.sizeIconMenu}
        color={isChecked ? Color.MayaBlue : Color.colorText}
      />
      <Text
        onPress={handleOnPressLabel}
        style={{...styles.stLabel, ...styleLabel}}>
        {label}
      </Text>
    </TouchableOpacityEx>
  );
}

const styles = StyleSheet.create({
  styleContains: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stIconCheck: {
    height: 35,
    width: 35,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  stLabel: {
    marginLeft: Dimension.margin5,
    fontSize: Dimension.fontSize14,
    color: Color.colorText,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

Checkbox.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleIconCheck: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  backgroundColor: PropTypes.string,
  isCheck: PropTypes.bool,
  onToggle: PropTypes.func,
  onPressLabel: PropTypes.func,
  id: PropTypes.any,
  data: PropTypes.any,
  label: PropTypes.any,
};
