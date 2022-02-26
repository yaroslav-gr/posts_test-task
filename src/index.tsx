import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { fetchPosts } from './store/api-actions';
import { store } from './store/store';

//@ts-ignore
store.dispatch(fetchPosts());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector(`#root`)
);
