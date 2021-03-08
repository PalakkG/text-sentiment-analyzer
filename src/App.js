import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import UserInput from './components/UserInput';
import VisualParagraph from './components/VisualParagraph';

const INITIAL_STATE = {
  text: '',
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'analyzed':
      return {
        ...state,
        sentiments: action.sentiments,
        analyzedText: action.analyzedText,
      };
    case 'update-text':
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <h1>Text Sentiment Analyzer</h1>
        <UserInput />
        <div className='results'>
          <VisualParagraph />
        </div>
      </div>
    </Provider>
  );
}

export default App;