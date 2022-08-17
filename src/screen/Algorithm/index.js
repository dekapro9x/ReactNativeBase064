import { connect } from 'react-redux';
import Algorithm from './Algorithm';
import { MenuAlgorithm } from './DataMenuAlgorithm';
const mapStateToProps = GlobalState => {
    const { LanguageReducer } = GlobalState;

    return {
        languageCurrent: LanguageReducer.language,
        MenusAppList: MenuAlgorithm,
        nameScreen: "Algorithm"
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Algorithm);
