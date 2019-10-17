import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Search from './search';

import createStore from '../../../store/create-store';

const store = createStore();

describe('Case Form Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Search /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
