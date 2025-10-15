import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const rootEl = document.getElementById('main');
const root = ReactDOM.createRoot(rootEl);

const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ============================================================================================================
