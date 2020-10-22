import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';

// redux dev tools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

// Store
const store = createStore(rootReducer, devTools)


ReactDOM.render
  (
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#root')
  );