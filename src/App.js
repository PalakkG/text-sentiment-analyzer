import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/index';
import UserInput from './components/UserInput';
import VisualParagraph from './components/VisualParagraph';

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