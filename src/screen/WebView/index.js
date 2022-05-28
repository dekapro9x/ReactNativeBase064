import { connect } from 'react-redux';
import WebviewScreenMenu from './WebViewScreenMenu';
import { MenuWebView } from './DataMenuWebView';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuWebView,
    nameScreen: "WEBVIEW"
  };
};


export default connect(mapStateToProps)(WebviewScreenMenu);
