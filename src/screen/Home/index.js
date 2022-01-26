import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = (state) => {
  console.log("State App", state);
  const { LanguageReducer } = state;
  return {
    languageCurrent: LanguageReducer.language
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
