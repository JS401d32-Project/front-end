import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Contact from './contacts-form';

import createStore from '../../store/create-store';

const store = createStore();

describe('Contact Form Component', () => {
  it('renders the contact form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Contact /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
