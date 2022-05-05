import { iconMenuSize } from "@css/";
import { keyNavigation } from "@navigation/KeyNavigations";
import I18n from 'react-native-i18n';
import { connect } from "react-redux";
import Home from "./Home";
import Eng from '@language/i18n/en';
import Vi from '@language/i18n/vi';
import China from "@language/i18n/china";
const mapStateToProps = (GlobalState) => {
  const { LanguageReducer } = GlobalState;
  const { translations } = I18n;

  const setTextMenuInit = (keyNameMenu) => {
    const languageCurrent = LanguageReducer.language;
    switch (languageCurrent) {
      case "Vi":
        return Vi[keyNameMenu]
      case "Eng":
        return Eng[keyNameMenu]
      case "China":
        return China[keyNameMenu]
    }
  }

  return {
    languageCurrent: LanguageReducer.language,
    homeMenu: [
      {
        title: translations[LanguageReducer.language]?.animations || setTextMenuInit("animations"),
        id: keyNavigation.ANIMATIONS,
        sortIndex: 1,
        iconColor: "blue",
        iconName: "animation",
        iconType: "MaterialIcons",
        iconImg: "https://media4.giphy.com/media/8K5vaT8LvjrLW/giphy.gif?cid=790b7611c7e8f4bfba46b1dc0c2a996894d8f3e4527cc46f&rid=giphy.gif&ct=g",
        iconSizeMenu: iconMenuSize,
        endpointVersion: "DEV"
      },
      {
        title: translations[LanguageReducer.language]?.maps || setTextMenuInit("maps"),
        id: keyNavigation.MAP,
        sortIndex: 2,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://mobilemarketingwatch.com/wp-content/uploads/2016/04/location.gif",
        iconSizeMenu: iconMenuSize,
        endpointVersion: "DEV"
      },
      {
        title: translations[LanguageReducer.language]?.camera || setTextMenuInit("camera"),
        id: keyNavigation.CAMERA,
        sortIndex: 3,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://img.pikbest.com/58pic/35/39/28/32k58PIC18yz2R10raZmi_PIC2018.gif!bw700",
        iconSizeMenu: iconMenuSize,
        endpointVersion: "DEV"
      },
      {
        title: translations[LanguageReducer.language]?.file || setTextMenuInit("file"),
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 4,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://smartscentvn.com/wp-content/uploads/2019/10/File-icon-PNG-715x715.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: "DEV"
      },
      {
        title: translations[LanguageReducer.language]?.PDF || setTextMenuInit("PDF"),
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 5,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Icon_pdf_file.svg/1200px-Icon_pdf_file.svg.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: "DEV"
      },
      {
        title: translations[LanguageReducer.language]?.video || setTextMenuInit("video"),
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 6,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/YouTube_icon_%282013-2017%29.svg/2048px-YouTube_icon_%282013-2017%29.svg.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: "DEV"
      },
      {
        title: translations[LanguageReducer.language]?.chart || setTextMenuInit("chart"),
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 7,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://static.vecteezy.com/system/resources/previews/001/187/079/original/chart-png.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: "DEV"
      },
      {
        title: "Native Module Android",
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 7,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://www.dotplays.com/wp-content/uploads/2019/06/Android-Icon.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: "DEV"
      },
      {
        title: "Native Module IOS",
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 7,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YBPr9G-g0InpNEgDF_b1z6KPno2aW3W1HwfZjMid2az195I5Y9_5cnXJV3K0h55mNkE&usqp=CAU",
        iconSizeMenu: iconMenuSize,
        endpointVersion: "DEV"
      },
    ]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
