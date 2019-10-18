import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import HomeNotes from './homeNotes';

import createStore from '../../store/create-store';

const store = createStore();

describe('Home Notes Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><HomeNotes /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
