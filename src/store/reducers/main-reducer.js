import { combineReducers } from 'redux';

import cases from './case-reducer';
import contacts from './contacts-reducer';
import users from './user-reducer';
import initialCase from './case-intake-form-reducer';

export default combineReducers({
  users,
  cases,
  contacts,
  initialCase,
});
