import { iconMenuSize } from "@css/";
import { keyNavigation } from "@navigation/KeyNavigations";
import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = (GlobalState) => {
  const { LanguageReducer } = GlobalState;

  const MenuHome = [
    {
      title: "Animations",
      id: keyNavigation.ANIMATIONS,
      sortIndex: 1,
      iconColor: "blue",
      iconName: "animation",
      iconType: "MaterialIcons",
      iconImg:"https://media4.giphy.com/media/8K5vaT8LvjrLW/giphy.gif?cid=790b7611c7e8f4bfba46b1dc0c2a996894d8f3e4527cc46f&rid=giphy.gif&ct=g",
      iconSizeMenu: iconMenuSize,
      endpointVersion: "DEV"
    },
    {
      title: "Map",
      id: keyNavigation.DISCOVERY_MAP,
      sortIndex: 2,
      iconColor: "blue",
      iconName: "logo-firebase",
      iconType: "Ionicons",
      iconImg:"",
      iconSizeMenu: iconMenuSize,
      endpointVersion: "DEV"
    },
    {
      title: "Camera",
      id: keyNavigation.DISCOVERY_CAMERA,
      sortIndex: 2,
      iconColor: "blue",
      iconName: "logo-firebase",
      iconType: "Ionicons",
      iconImg:"",
      iconSizeMenu: iconMenuSize,
      endpointVersion: "DEV"
    },
    {
      title: "Chat",
      id: keyNavigation.DISCOVERY_CHAT,
      sortIndex: 2,
      iconColor: "blue",
      iconName: "logo-firebase",
      iconType: "Ionicons",
      iconImg:"",
      iconSizeMenu: iconMenuSize,
      endpointVersion: "DEV"
    },
    {
      title: "KEEP",
      id: keyNavigation.DISCOVERY_CHAT,
      sortIndex: 2,
      iconColor: "blue",
      iconName: "logo-firebase",
      iconType: "Ionicons",
      iconImg:"",
      iconSizeMenu: iconMenuSize,
      endpointVersion: "DEV"
    },

  ];
  return {
    languageCurrent: LanguageReducer.language,
    homeMenu: MenuHome
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
