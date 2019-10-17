import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CaseIntakeForm from './case-intake-form';

import createStore from '../../../store/create-store';

const store = createStore();

describe('Case Form Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><CaseIntakeForm /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
