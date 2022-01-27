import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = (GlobalState) => {
  const { LanguageReducer } = GlobalState;
  return {
    languageCurrent: LanguageReducer.language
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
