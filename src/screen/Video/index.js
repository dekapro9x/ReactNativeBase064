import { connect } from 'react-redux';
import VideoScreenMenu from './VideoViewScreenMenu';
import { MenuVideo } from './DataMenuVideo';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuVideo,
    nameScreen: "Video"
  };
};


export default connect(mapStateToProps)(VideoScreenMenu);
