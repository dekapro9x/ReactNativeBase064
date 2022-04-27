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
      title: "Camera",
      id: keyNavigation.CAMERA,
      sortIndex: 2,
      iconColor: "blue",
      iconName: "logo-firebase",
      iconType: "Ionicons",
      iconImg:"https://img.pikbest.com/58pic/35/39/28/32k58PIC18yz2R10raZmi_PIC2018.gif!bw700",
      iconSizeMenu: iconMenuSize,
      endpointVersion: "DEV"
    },
    {
      title: "Map",
      id: keyNavigation.MAP,
      sortIndex: 3,
      iconColor: "blue",
      iconName: "logo-firebase",
      iconType: "Ionicons",
      iconImg:"https://mobilemarketingwatch.com/wp-content/uploads/2016/04/location.gif",
      iconSizeMenu: iconMenuSize,
      endpointVersion: "DEV"
    },
    {
      title: "File",
      id: keyNavigation.DISCOVERY_CHAT,
      sortIndex: 4,
      iconColor: "blue",
      iconName: "logo-firebase",
      iconType: "Ionicons",
      iconImg:"https://smartscentvn.com/wp-content/uploads/2019/10/File-icon-PNG-715x715.png",
      iconSizeMenu: iconMenuSize,
      endpointVersion: "DEV"
    },
    {
      title: "PDF",
      id: keyNavigation.DISCOVERY_CHAT,
      sortIndex: 5,
      iconColor: "blue",
      iconName: "logo-firebase",
      iconType: "Ionicons",
      iconImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Icon_pdf_file.svg/1200px-Icon_pdf_file.svg.png",
      iconSizeMenu: iconMenuSize,
      endpointVersion: "DEV"
    },
    {
      title: "Youtobe",
      id: keyNavigation.DISCOVERY_CHAT,
      sortIndex: 6,
      iconColor: "blue",
      iconName: "logo-firebase",
      iconType: "Ionicons",
      iconImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/YouTube_icon_%282013-2017%29.svg/2048px-YouTube_icon_%282013-2017%29.svg.png",
      iconSizeMenu: iconMenuSize,
      endpointVersion: "DEV"
    },
    {
      title: "Chart",
      id: keyNavigation.DISCOVERY_CHAT,
      sortIndex: 7,
      iconColor: "blue",
      iconName: "logo-firebase",
      iconType: "Ionicons",
      iconImg:"https://static.vecteezy.com/system/resources/previews/001/187/079/original/chart-png.png",
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
