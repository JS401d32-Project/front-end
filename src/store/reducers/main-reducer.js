import { combineReducers } from 'redux';
import notes from './notes-reducer';
import cases from './case-reducer';
import contacts from './contacts-reducer';

export default combineReducers({
  cases,
  contacts,
  notes
});
