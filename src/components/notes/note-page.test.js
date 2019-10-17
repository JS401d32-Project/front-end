import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import NotePage from './note-page';

import createStore from '../../store/create-store';

const store = createStore();

describe('Note Page Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><NotePage /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
