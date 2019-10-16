import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Contacts from './components/contact/contacts-form';
import NavBar from './components/navBar/nav';
import HomePage from './components/home-test/home';
import CasePage from './components/case/case';
import OAuth from './components/oauth/OAuth';

export default function App() {
  return (
    <>
      <NavBar />
      <OAuth />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/casePage" component={CasePage}/>
        </Switch>
      </BrowserRouter>
      <Contacts />
    </>
  );
}
