import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contacts from '../contact/contacts-form';
import NavBar from '../navBar/nav';
import HomePage from '../view-cases';
import CasePage from '../case/case';
import NoRoute from '../no-route';
import CaseIntake from '../case-intake/case-intake';

/**
 * CaseHawk component renders all the components showing on the home page
 * @visibleName CaseHawk
 */
export default function CaseHawk() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/casePage/:id" component={CasePage}/>
          <Route exact path="/contacts" component={Contacts}/>
          <Route exact path="/caseIntake" component={CaseIntake} />
          <Route component={NoRoute} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
