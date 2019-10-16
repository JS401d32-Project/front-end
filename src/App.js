import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Contacts from './components/contact/contacts-form';
import Contact from './components/contact/contact-render';
import NavBar from './components/navBar/nav';
import HomePage from './components/home-test/home';
import CasePage from './components/case/case';
import OAuth from './components/oauth/OAuth';

export default function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/casePage" component={CasePage}/>
          <Route exact path="/oauth" component={OAuth}/>
        </Switch>
      </BrowserRouter>
      <Contact />
      <Contacts />

    </>
  );
}
