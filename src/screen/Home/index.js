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
        id: keyNavigation.VIDEO,
        sortIndex: 5,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://vi.seaicons.com/wp-content/uploads/2016/10/video-icon.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.chart || setTextMenuInit("chart"),
        id: keyNavigation.CHART,
        sortIndex: 6,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://static.vecteezy.com/system/resources/previews/001/187/079/original/chart-png.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.nativeAndroid || setTextMenuInit("nativeAndroid"),
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
        title: translations[LanguageReducer.language]?.nativeIOS|| setTextMenuInit("nativeIOS"),
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
        title: translations[LanguageReducer.language]?.socketIO|| setTextMenuInit("socketIO"),
        id: keyNavigation.SOCKET,
        sortIndex: 9,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://store-images.s-microsoft.com/image/apps.49262.43e96441-6f8f-4a29-8d75-0cf6149ef215.8ce5dcb1-395b-4660-b523-b29abba201d0.f06a700b-4633-47f5-a190-22c283df066a",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.fireBase|| setTextMenuInit("fireBase"),
        id: keyNavigation.FIRE_BASE,
        sortIndex: 10,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://cdn.iconscout.com/icon/free/png-256/firebase-3628772-3030134.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.webView|| setTextMenuInit("webView"),
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
        title: translations[LanguageReducer.language]?.sound || setTextMenuInit("sound"),
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
        title:translations[LanguageReducer.language]?.deepLink || setTextMenuInit("deepLink"),
        id: keyNavigation.SOUND,
        sortIndex: 12,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://play-lh.googleusercontent.com/p9OLPc2dSDyxau9vDZB1W_yfr5S0aVM6a0cGgw76wwBnt7GbScPzVZby7g0LQtTS8TI",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.pushNotifications || setTextMenuInit("pushNotifications"),
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 13,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://www.nicepng.com/png/detail/38-385668_push-notifications-push-notification-icon-png.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.storage || setTextMenuInit("storage"),
        id: keyNavigation.DISCOVERY_CHAT,
        sortIndex: 14,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "data:image/jpeg;base64,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",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.security || setTextMenuInit("security"),
        id: keyNavigation.SECURITY,
        sortIndex: 15,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://www.pngall.com/wp-content/uploads/4/Web-Security-Shield-PNG.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.miniApp || setTextMenuInit("miniApp"),
        id: keyNavigation.MINI_APP,
        sortIndex: 16,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://images-na.ssl-images-amazon.com/images/I/61A9l128j9L.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.server || setTextMenuInit("server"),
        id: keyNavigation.SERVER_NODEJS,
        sortIndex: 17,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://www.nicepng.com/png/full/207-2077577_server-png-web-hosting-banner-png.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.sdk || setTextMenuInit("sdk"),
        id: keyNavigation.FREQUENTLY_QUESTIONS,
        sortIndex: 18,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://miro.medium.com/max/1400/1*RRKd-7TW4jQDG-6ODLUKWw.png",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.vr_ar || setTextMenuInit("vr_ar"),
        id: keyNavigation.FREQUENTLY_QUESTIONS,
        sortIndex: 19,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://cdn.tgdd.vn/Files/2017/03/01/955930/vrandar2_800x450.jpg",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.algorithm || setTextMenuInit("algorithm"),
        id: keyNavigation.ALGORITHM,
        sortIndex: 19,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://banner2.cleanpng.com/20200609/txi/transparent-big-data-icon-algorithm-icon-5edf72bc792be3.1865164615917022044963.jpg",
        iconSizeMenu: iconMenuSize,
        endpointVersion: versionsBuildsAPK
      },
      {
        title: translations[LanguageReducer.language]?.frequentlyQuestions || setTextMenuInit("frequentlyQuestions"),
        id: keyNavigation.FREQUENTLY_QUESTIONS,
        sortIndex: 20,
        iconColor: "blue",
        iconName: "logo-firebase",
        iconType: "Ionicons",
        iconImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nOjFkPeK13zP6mq7J-X2jQV6ZY6UFY0VgrwbjvocYarxK0osryTtq5_Gp108Mw6A3i0&usqp=CAU",
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
