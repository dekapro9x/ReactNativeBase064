import { connect } from 'react-redux';
import CameraMenusScreen from './Camera';
import { MenuCameras } from './DataMenuCamera';
const mapStateToProps = GlobalState => {
    const { LanguageReducer } = GlobalState;

    return {
        languageCurrent: LanguageReducer.language,
        MenusAppList: MenuCameras,
        nameScreen: "Cameras"
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraMenusScreen);
