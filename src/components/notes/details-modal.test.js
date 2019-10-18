import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import DetailsModal from './details-modal';

import createStore from '../../store/create-store';

const store = createStore();

describe('Details Modal Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><DetailsModal /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
