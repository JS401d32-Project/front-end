import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import NoRoute from './index';

import createStore from '../../store/create-store';

const store = createStore();

describe('No Route Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><NoRoute /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
