import { connect } from 'react-redux';
import NativeModuleAndroidScreenMenu from './NativeModuleAndroidScreenMenu';
import { MenuNativeModuleAndroids } from './DataMenuNativeAndroid';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuNativeModuleAndroids,
    nameScreen:"Native Module Android"
  };
};


export default connect(mapStateToProps)(NativeModuleAndroidScreenMenu);
