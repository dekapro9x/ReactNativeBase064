import { connect } from 'react-redux';
import MiniAppScreenMenu from './MiniAppScreenMenu';
import { MenuMiniApp } from './DataMenuMiniApp';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuMiniApp,
    nameScreen: "MINI APP"
  };
};


export default connect(mapStateToProps)(MiniAppScreenMenu);
