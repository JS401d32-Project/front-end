import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ViewCases from './index';

import createStore from '../../store/create-store';

const store = createStore();

describe('View Cases Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><ViewCases /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
