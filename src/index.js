import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import createStore from './store/create-store';

const store = createStore();


render(
  <Provider store={store}>
   <BrowserRouter>
      <App />
   </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
