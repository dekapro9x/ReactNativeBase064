import { connect } from 'react-redux';
import ChartScreenMenu from './ChartScreenMenu';
import { MenuChart } from './DataMenuChart';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuChart,
    nameScreen: "CHART"
  };
};


export default connect(mapStateToProps)(ChartScreenMenu);
