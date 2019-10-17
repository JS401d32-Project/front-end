import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Case from './case';

import createStore from '../../store/create-store';

const store = createStore();

describe('Case Form Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Case /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
