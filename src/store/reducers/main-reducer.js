import { combineReducers } from 'redux';
import notes from './notes-reducer';
import cases from './case-reducer';
import currentCase from './case-reducer';
import contacts from './contacts-reducer';
import users from './user-reducer';
import initialCase from './case-intake-form-reducer';

export default combineReducers({
  currentCase,
  users,
  contacts,
  notes
  initialCase,
});
