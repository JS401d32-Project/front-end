import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducers/main-reducer';

import thunk from './middleware/thunk';

export default () => {
  return createStore(mainReducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));
};
