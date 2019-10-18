import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CaseHawk from './case-hawk';

import createStore from '../../store/create-store';

const store = createStore();

describe('Case Hawk Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><CaseHawk /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
