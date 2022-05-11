import {connect} from 'react-redux';
import Maps from './Maps';
import {MenuMaps} from './DataMenuMaps';
const mapStateToProps = GlobalState => {
  const {LanguageReducer} = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuMaps,
    nameScreen:"Maps"
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
