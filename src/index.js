import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import App from './components/app/app';
import thunk from 'redux-thunk';
import { createAPI } from './services/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { reducer } from '../src/store/reducer';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api)),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector(`#root`)
);
