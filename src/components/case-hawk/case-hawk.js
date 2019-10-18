import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { positions, Provider as AlertProvider, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import CaseIntake from '../case-intake/case-intake';
import CasePage from '../case/case';
import Contacts from '../contact/contacts-form';
import HomePage from '../view-cases';
import NavBar from '../navBar/nav';
import NoRoute from '../no-route';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

/**
 * CaseHawk component renders all the components showing on the home page
 * @visibleName CaseHawk
 */
export default function CaseHawk() {
  return (
    <React.Fragment>
      <AlertProvider template={AlertTemplate} {...options}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/casePage/:id" component={CasePage}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route patch="/caseIntake" component={CaseIntake} />
            <Route component={NoRoute} />
          </Switch>
        </BrowserRouter>
      </AlertProvider>
    </React.Fragment>
  );
}
