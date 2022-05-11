import { connect } from 'react-redux';
import FileScreenMenu from './FileScreenMenu';
import { MenuFiles } from './DataMenuFile';
const mapStateToProps = GlobalState => {
    const { LanguageReducer } = GlobalState;
    return {
        languageCurrent: LanguageReducer.language,
        MenusAppList: MenuFiles,
        nameScreen: "File"
    };
};

export default connect(mapStateToProps)(FileScreenMenu);
