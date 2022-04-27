import {connect} from 'react-redux';
import MapsScreen from './Maps';
import {MenuMaps} from './DataMenuMaps';
const mapStateToProps = GlobalState => {
  const {LanguageReducer} = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenuMaps: MenuMaps,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MapsScreen);
