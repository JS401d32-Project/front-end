import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/home-test/home'
import CasePage from './components/case/case';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/casePage" component={CasePage}/>
    </Switch>
  )};
