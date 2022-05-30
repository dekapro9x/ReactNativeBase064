import { connect } from 'react-redux';
import SocketScreenMenu from './SocketScreenMenu';
import { MenuSockets } from './DataMenuSocket';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuSockets,
    nameScreen:"SOCKET IO"
  };
};


export default connect(mapStateToProps)(SocketScreenMenu);
