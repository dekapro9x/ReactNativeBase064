import { connect } from 'react-redux';
import BaseScreenMenu from './BaseScreenMenu';
import { MenuBASICs } from './DataMenuBasic';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuBASICs,
  };
};


export default connect(mapStateToProps)(BaseScreenMenu);
