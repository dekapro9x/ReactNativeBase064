import { connect } from 'react-redux';
import PDAScanner from './PDAScreen';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;
  return {
    languageCurrent: LanguageReducer.language,
    nameScreen:"PDA Zebra-TC21-2D Scanner SDK"
  };
};


export default connect(mapStateToProps)(PDAScanner);
