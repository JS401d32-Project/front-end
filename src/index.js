import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReactModal from 'react-modal';

import App from './App';
import createStore from './store/create-store';

ReactModal.setAppElement('#root');

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
