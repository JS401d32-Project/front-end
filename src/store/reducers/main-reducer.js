import { combineReducers } from 'redux';

import cases from './case-reducer';
import contacts from './contacts-reducer';

export default combineReducers({
  cases,
  contacts,
});
