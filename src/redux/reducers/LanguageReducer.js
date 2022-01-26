import * as types from "../actions/actionTypes";

const initialState = {
    language: 'vi'
};

export default function LanguageReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_LANGUAGE: {
            console.log("Chạy vào đây",action);
            return { language: action.data };
        }
        default:
            return state;
    }
}
