import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { green400 } from "../const/Color";

const getSize = (type, iconSize) => {
  if (iconSize) {
    return iconSize;
  }
  switch (type) {
    case "Ionicons":
      return SizeRpScreen.icon_size_ionicons;
    default:
      return SizeRpScreen.icon_size;
  }
};
const Icon = props => {
  const { type, name, color } = props;

  const iconSize = getSize(type, props.iconSize);

  switch (type) {
    case "AntDesign":
      return (
        <AntDesign
          {...props}
          name={name}
          size={iconSize || SizeRpScreen.icon_size}
          color={color || green400}
        />
      );
    case "FontAwesome":
      return (
        <FontAwesome
          {...props}
          name={name}
          size={iconSize || SizeRpScreen.icon_size}
          color={color || green400}
        />
      );
    case "Feather":
      return (
        <Feather
          name={name}
          size={iconSize || SizeRpScreen.icon_size}
          color={color || green400}
        />
      );
    case "Entypo":
      return (
        <Entypo
          {...props}
          name={name}
          size={iconSize || SizeRpScreen.icon_size}
          color={color || green400}
        />
      );

    case "Octicons":
      return (
        <Octicons
          {...props}
          name={name}
          size={iconSize || SizeRpScreen.icon_size}
          color={color || green400}
        />
      );
    case "MaterialIcons":
      return (
        <MaterialIcons
          {...props}
          name={name}
          size={iconSize || SizeRpScreen.icon_size}
          color={color || green400}
        />
      );
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons
          {...props}
          name={name}
          size={iconSize || SizeRpScreen.icon_size}
          color={color || green400}
        />
      );
    case "Fontisto":
      return (
        <Fontisto
          {...props}
          name={name}
          size={iconSize || SizeRpScreen.icon_size}
          color={color || green400}
        />
      );
    default:
      return (
        <Ionicons
          {...props}
          name={name}
          size={iconSize || SizeRpScreen.icon_size}
          color={color || green400}
        />
      );
  }
};
/**
 * type, name, iconSize, color, style
 * @param {*} props
 */
const AppIcon = props => Icon(props);

export { AppIcon };