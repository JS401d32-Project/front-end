import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contacts from './components/contact/contacts-form';
import NavBar from './components/navBar/nav';
import HomePage from './components/view-cases';
import CasePage from './components/case/case';
import OAuth from './components/oauth/OAuth';
import NoRoute from './components/no-route';


export default function App() {
  return (
    <>
      <NavBar />
      <OAuth />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/casePage/:id" component={CasePage}/>
          <Route exact path="/contacts" component={Contacts}/>
          <Route component={NoRoute} />
        </Switch>

      </BrowserRouter>
    </>
  );
}
