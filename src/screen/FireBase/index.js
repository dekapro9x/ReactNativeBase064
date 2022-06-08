import { connect } from 'react-redux';
import FireBaseScreenMenu from './FireBaseScreenMenu';
import { MenuFireBase } from './DataMenuFireBase';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuFireBase,
    nameScreen: "FIRE BASE"
  };
};


export default connect(mapStateToProps)(FireBaseScreenMenu);
