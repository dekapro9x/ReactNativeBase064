import { connect } from 'react-redux';
import SoundScreenMenu from './SoundScreenMenu';
import { MenuSounds } from './DataMenuSound';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuSounds,
    nameScreen:"SOUND"
  };
};


export default connect(mapStateToProps)(SoundScreenMenu);
