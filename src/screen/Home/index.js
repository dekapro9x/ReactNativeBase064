import { iconMenuSize } from "@css/";
import { keyNavigation } from "@navigation/KeyNavigations";
import I18n from 'react-native-i18n';
import { connect } from "react-redux";
import Home from "./Home";
import Eng from '@language/i18n/en';
import Vi from '@language/i18n/vi';
import China from "@language/i18n/china";
import { versionsBuildsAPK } from "@const/Setting";
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
        title: "Basic",
        id: keyNavigation.BASIC,
        sortIndex: 1,
        iconColor: "blue",
        iconName: "animation",
        iconType: "MaterialIcons",
        iconImg: "https://media.gettyimages.com/vectors/scalability-vector-icon-vector-id1264699776",
        iconSizeMenu: iconMenuSize,
        endpointVersion: "PRODUCTS",
      },
      {
        title: "Basic Menu Screen",
        id: keyNavigation.BASIC_MENU_SCREEN,
        sortIndex: 1,
        iconColor: "blue",
        iconName: "animation",
        iconType: "MaterialIcons",
        iconImg: "https://media.gettyimages.com/vectors/scalability-vector-icon-vector-id1264699776",
        iconSizeMenu: iconMenuSize,
        endpointVersion: "PRODUCTS"
      },
      {
        title: translations[LanguageReducer.language]?.animations || setTextMenuInit("animations"),
        id: keyNavigation.ANIMATIONS,
        sortIndex: 1,
        iconColor: "blue",
        iconName: "animation",
        iconType: "MaterialIcons",
        iconImg: "https://media4.giphy.com/media/8K5vaT8LvjrLW/giphy.gif?cid=790b7611c7e8f4bfba46b1dc0c2a996894d8f3e4527cc46f&rid=giphy.gif&ct=g",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
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
        endpointVersion: versionsBuildsAPK
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
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.file || setTextMenuInit("file"),
        id: keyNavigation.FILE,
        sortIndex: 4,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://smartscentvn.com/wp-content/uploads/2019/10/File-icon-PNG-715x715.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.video || setTextMenuInit("video"),
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 5,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/YouTube_icon_%282013-2017%29.svg/2048px-YouTube_icon_%282013-2017%29.svg.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.chart || setTextMenuInit("chart"),
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 6,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://static.vecteezy.com/system/resources/previews/001/187/079/original/chart-png.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: "Native Android",
        id: keyNavigation.NATIVE_MODULE_ANDROID,
        sortIndex: 7,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://www.dotplays.com/wp-content/uploads/2019/06/Android-Icon.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: "Native IOS",
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 8,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YBPr9G-g0InpNEgDF_b1z6KPno2aW3W1HwfZjMid2az195I5Y9_5cnXJV3K0h55mNkE&usqp=CAU",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: "Socket IO",
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 9,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://store-images.s-microsoft.com/image/apps.49262.43e96441-6f8f-4a29-8d75-0cf6149ef215.8ce5dcb1-395b-4660-b523-b29abba201d0.f06a700b-4633-47f5-a190-22c283df066a",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: "Fire Base",
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 10,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://cdn.iconscout.com/icon/free/png-256/firebase-3628772-3030134.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: "WebView",
        id: keyNavigation.WEBVIEW,
        sortIndex: 11,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://play-lh.googleusercontent.com/zjBnMbzqmjER8zKDpv9ysHZfOwjsxG_o4AETsM2qYtxtyk2EL8DeRY-2h-mTThqBDqZK",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: "Sound",
        id: keyNavigation.SOUND,
        sortIndex: 12,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://icons8.com/vue-static/landings/animated-icons/icons/sound/sound_200.gif",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: "Push Notifications",
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 13,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://www.nicepng.com/png/detail/38-385668_push-notifications-push-notification-icon-png.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
    ]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
