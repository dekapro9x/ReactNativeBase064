import {connect} from 'react-redux';
import AnimationsMenusScreen from './Animations';
import {MenuAnimations} from './DataMenuAnimations';
const mapStateToProps = GlobalState => {
  const {LanguageReducer} = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuAnimations,
    nameScreen:"Animations"
  };
};

export default connect(mapStateToProps)(AnimationsMenusScreen);
