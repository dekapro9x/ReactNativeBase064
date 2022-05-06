import {connect} from 'react-redux';
import BASICsScreen from './BasicScreen';
import {MenuBASICs} from './DataMenuBasic';
const mapStateToProps = GlobalState => {
  const {LanguageReducer} = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenuBASICs: MenuBASICs,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BASICsScreen);
