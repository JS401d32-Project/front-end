import { combineReducers } from 'redux';

import cases from './case-reducer';
import contacts from './contacts-reducer';
import users from './user-reducer';

export default combineReducers({
  users,
  cases,
  contacts,
});
