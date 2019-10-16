import { combineReducers } from 'redux';

import currentCase from './case-reducer';
import contacts from './contacts-reducer';
import initialCase from './case-intake-form-reducer';

export default combineReducers({
  currentCase,
  contacts,
  initialCase,
});
