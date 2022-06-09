import { connect } from 'react-redux';
import SecurityScreenMenu from './SecurityScreenMenu';
import { MenuSecurity } from './DataMenuSecurity';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuSecurity,
    nameScreen: "SECURITY"
  };
};


export default connect(mapStateToProps)(SecurityScreenMenu);
