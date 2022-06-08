import { connect } from 'react-redux';
import QuestionsScreenMenu from './QuestionsScreenMenu';
import { MenuQuestion } from './DataMenuQuestions';
const mapStateToProps = GlobalState => {
  const { LanguageReducer } = GlobalState;

  return {
    languageCurrent: LanguageReducer.language,
    MenusAppList: MenuQuestion,
    nameScreen: "FREQUENTLY QUESTIONS"
  };
};


export default connect(mapStateToProps)(QuestionsScreenMenu);
