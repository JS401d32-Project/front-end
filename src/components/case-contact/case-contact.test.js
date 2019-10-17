import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CaseContact from './case-contact';

import createStore from '../../../store/create-store';

const store = createStore();

describe('Case Form Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><CaseContact /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
