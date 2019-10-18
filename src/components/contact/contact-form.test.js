import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Contact from './contacts-form';

import createStore from '../../store/create-store';

const store = createStore();

describe('Contact Form Component', () => {
  it('renders the contact form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
      <AlertProvider template={AlertTemplate}>
      <Contact />
      </AlertProvider>
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
