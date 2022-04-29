import { connect } from "react-redux";
import Home from "./Home";
import {MenuHome} from "./util/DataHomeMenu";
const mapStateToProps = (GlobalState) => {
  const { LanguageReducer } = GlobalState;
  return {
    languageCurrent: LanguageReducer.language,
    homeMenu: MenuHome
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
