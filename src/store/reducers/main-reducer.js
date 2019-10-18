import { combineReducers } from 'redux';
import notes from './notes-reducer';
import displayNote from './display-note-reducer';
import currentCase from './case-reducer';
import contacts from './contacts-reducer';
import user from './user-reducer';
import initialCase from './case-intake-form-reducer';

export default combineReducers({
  currentCase,
  user,
  contacts,
  notes,
  displayNote,
  initialCase,
});
