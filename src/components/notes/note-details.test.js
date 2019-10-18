import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import NoteDetails from './note-details';

import createStore from '../../store/create-store';

const store = createStore();

describe('Note Details Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><NoteDetails /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
