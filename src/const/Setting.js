import { LoadingAppType } from "./TypeLoading";
import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === "android";
const AppLogo =
  "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png";

const AppLoadingType = LoadingAppType.MeoMeo;

const PlatFormUsingConnect = [
  {
    id: 1,
    name: "FaceBook",
    iconName: "facebook",
    iconType: "Entypo",
    backgroundColor: "#5879AB"
  },
  {
    id: 2,
    name: "Twister",
    iconName: "twitter",
    iconType: "Entypo",
    backgroundColor: "#43D1F7"
  },
  {
    id: 3,
    name: "Google",
    iconName: "google--with-circle",
    iconType: "Entypo",
    backgroundColor: "#FF6353"
  },
  {
    id: 4,
    name: "Devices ID",
    iconName: "cellphone-key",
    iconType: "MaterialCommunityIcons",
    backgroundColor: "#737373"
  }
]

const DataSliderHome = [
  {
    id: 1,
    uri: 'https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G',
  },
  {
    id: 2,
    uri:
      'https://photos5.appleinsider.com/gallery/36356-67551-34A9F521-4345-4AE1-8C31-B6109A94CF7B-xl.jpg',
  },
  {
    id: 3,
    uri: 'https://i.ytimg.com/vi/gvF6sFIPfsQ/maxresdefault.jpg',
  },
];



export { AppLogo, AppLoadingType, PlatFormUsingConnect, isIOS, isAndroid, DataSliderHome };
