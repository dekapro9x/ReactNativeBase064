import { connect } from 'react-redux';
import ServerNodeJsScreenMenu from './ServerNodeJsScreenMenu';
import { MenuServerNodeJS } from './DataMenuServerNode';
import { IP_CONFIG } from '@api/Setting';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuServerNodeJS,
    nameScreen:`SERVER NODEJS ${IP_CONFIG}`
  };
};


export default connect(mapStateToProps)(ServerNodeJsScreenMenu);
