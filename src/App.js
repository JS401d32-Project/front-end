import React from 'react';

import { Provider } from 'react-redux';
import Contacts from './components/contact/contacts-form';


import createStore from './store/create-store';

const store = createStore();

function App() {
  return (
    <>
      <h1>Hello JS 401!</h1>
      <Provider store={store}><Contacts /></Provider>
    </>
  );
}

export default App;
