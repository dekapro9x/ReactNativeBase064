import { connect } from 'react-redux';
import ServerNodeJsScreenMenu from './ServerNodeJsScreenMenu';
import { MenuServerNodeJS } from './DataMenuServerNode';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuServerNodeJS,
    nameScreen:"SERVER NODEJS"
  };
};


export default connect(mapStateToProps)(ServerNodeJsScreenMenu);
