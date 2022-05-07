import {connect} from 'react-redux';
import AnimationsScreen from './Animations';
import {MenuAnimations} from './DataMenuAnimations';
const mapStateToProps = GlobalState => {
  const {LanguageReducer} = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenuAnimations: MenuAnimations,
  };
};

export default connect(mapStateToProps)(AnimationsScreen);
