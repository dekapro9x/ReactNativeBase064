import * as types from "../actions/actionTypes";

const initialState = {
    language: 'Vi'
};

export default function LanguageReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_LANGUAGE: {
            return { language: action.data };
        }
        default:
            return state;
    }
}
