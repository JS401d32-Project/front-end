import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CaseIntake from './case-intake';

import createStore from '../../store/create-store';

const store = createStore();

describe('Case Intake Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><CaseIntake /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
