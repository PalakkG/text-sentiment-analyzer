import { UPDATE_TEXT, ANALYZED_TEXT } from '../actions/index';

const rootReducer = (state, action) => {
    switch (action.type) {
        case ANALYZED_TEXT:
            return {
                ...state,
                sentiments: action.sentiments,
                analyzedText: action.analyzedText,
            };
        case UPDATE_TEXT:
            return {
                ...state,
                text: action.text,
            };
        default:
            return state;
    }
};

export default rootReducer;