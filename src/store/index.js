import { createStore } from 'redux';
import rootReducer from '../reducer/index';

const INITIAL_STATE = {
    text: '',
};

const store = createStore(
    rootReducer,
    INITIAL_STATE,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;