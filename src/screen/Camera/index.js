import { connect } from 'react-redux';
import Camera from './Camera';
import { MenuCameras } from './DataMenuCamera';
const mapStateToProps = GlobalState => {
    const { LanguageReducer } = GlobalState;

    return {
        languageCurrent: LanguageReducer.language,
        MenuCameras: MenuCameras,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Camera);
