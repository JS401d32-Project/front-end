import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Nav from './nav';

import createStore from '../../store/create-store';

const store = createStore();

describe('Nav Bar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><BrowserRouter><Nav /></BrowserRouter></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
